require("dotenv").config();

const readline = require("readline");
const bcrypt = require("bcryptjs");
const {
  PrismaClient,
  Gender,
  StudentStatus,
  UserRole,
  InventoryTransactionType
} = require("@prisma/client");

// Errors are reported by this CLI in a friendly form, so the client keeps its own error logging off.
const prisma = new PrismaClient({ log: ["warn"] });

const PAGE_SIZE = 25;
const CELL_WIDTH = 32;

/** Thrown when stdin closes (Ctrl+C, EOF) so every pending prompt unwinds to the shutdown handler. */
class ExitSignal extends Error {}

let rl = null;
let inputClosed = false;
let pendingWaiter = null;

/** Buffered so that piped (non-interactive) input is not dropped between prompts. */
const bufferedLines = [];

function handleLine(line) {
  if (pendingWaiter) {
    const waiter = pendingWaiter;
    pendingWaiter = null;
    waiter.resolve(line.trim());
    return;
  }
  bufferedLines.push(line);
}

async function ask(question) {
  if (inputClosed) {
    process.stdout.write(question);
  } else {
    rl.setPrompt(question);
    rl.prompt();
  }

  if (bufferedLines.length > 0) {
    return bufferedLines.shift().trim();
  }
  if (inputClosed) {
    throw new ExitSignal();
  }

  return new Promise((resolve, reject) => {
    pendingWaiter = { resolve, reject };
  });
}

async function confirm(question, defaultYes = false) {
  const suffix = defaultYes ? " (Y/n): " : " (y/N): ";
  const answer = (await ask(question + suffix)).toLowerCase();
  if (answer === "") {
    return defaultYes;
  }
  return answer === "y" || answer === "yes";
}

function parseBoolean(answer) {
  const value = answer.toLowerCase();
  if (["y", "yes", "true", "1"].includes(value)) {
    return true;
  }
  if (["n", "no", "false", "0"].includes(value)) {
    return false;
  }
  throw new Error("Enter y or n.");
}

function parseDate(answer) {
  // Date-only input is anchored to UTC midnight so the value reads back as the day the user typed.
  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(answer) ? `${answer}T00:00:00.000Z` : answer);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Enter a date as YYYY-MM-DD.");
  }
  return date;
}

function parseInteger(answer) {
  const value = Number(answer);
  if (!Number.isInteger(value)) {
    throw new Error("Enter a whole number.");
  }
  return value;
}

function parseFloatValue(answer) {
  const value = Number(answer);
  if (!Number.isFinite(value)) {
    throw new Error("Enter a number.");
  }
  return value;
}

function parseDecimal(answer) {
  if (!/^-?\d+(\.\d{1,2})?$/.test(answer)) {
    throw new Error("Enter an amount with up to 2 decimal places, e.g. 5000.00");
  }
  return answer;
}

/** A clock time is stored against the day of its anchor field (e.g. a visit time sits on the visit date). */
function parseTime(answer, field, context) {
  const match = /^(\d{1,2}):(\d{2})$/.exec(answer);
  if (!match) {
    const timestamp = new Date(answer);
    if (Number.isNaN(timestamp.getTime())) {
      throw new Error("Enter a time as HH:MM (24-hour).");
    }
    return timestamp;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    throw new Error("Enter a time as HH:MM (24-hour).");
  }

  const anchorValue = field.anchorField && context ? context[field.anchorField] : null;
  const anchor = anchorValue ? new Date(anchorValue) : new Date();
  return new Date(
    Date.UTC(anchor.getUTCFullYear(), anchor.getUTCMonth(), anchor.getUTCDate(), hours, minutes)
  );
}

function formatDateTime(value) {
  if (!value) {
    return "-";
  }
  const iso = new Date(value).toISOString();
  return `${iso.slice(0, 10)} ${iso.slice(11, 16)}`;
}

function formatTime(value) {
  if (!value) {
    return "-";
  }
  return new Date(value).toISOString().slice(11, 16);
}

function formatValue(value) {
  if (value === null || value === undefined) {
    return "-";
  }
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "boolean") {
    return value ? "yes" : "no";
  }
  const text = String(value);
  return text.length > CELL_WIDTH ? `${text.slice(0, CELL_WIDTH - 1)}…` : text;
}

function printTable(columns, records, { numbered = false } = {}) {
  const headers = (numbered ? ["#"] : []).concat(columns.map((column) => column.header));
  const body = records.map((record, index) => {
    const cells = columns.map((column) => formatValue(column.get(record)));
    return numbered ? [String(index + 1)].concat(cells) : cells;
  });

  const widths = headers.map((header, index) =>
    Math.max(header.length, ...body.map((row) => row[index].length), 1)
  );
  const renderRow = (cells) => cells.map((cell, index) => cell.padEnd(widths[index])).join("  ");

  console.log("");
  console.log(renderRow(headers));
  console.log(widths.map((width) => "-".repeat(width)).join("  "));
  for (const row of body) {
    console.log(renderRow(row));
  }
  console.log(`(${records.length} row${records.length === 1 ? "" : "s"})`);
}

function printJson(record) {
  console.log(JSON.stringify(record, (key, value) => (typeof value === "bigint" ? value.toString() : value), 2));
}

function describePrismaError(error) {
  const target = error.meta && (error.meta.target || error.meta.field_name || error.meta.modelName);
  switch (error.code) {
    case "P2002":
      return `A record with that value already exists (unique constraint on ${formatValue(target)}).`;
    case "P2003":
      return `Related record does not exist or is still referenced (foreign key ${formatValue(target)}).`;
    case "P2025":
      return "Record not found. It may have been deleted already.";
    case "P2000":
      return `Value is too long for column ${formatValue(target)}.`;
    case "P2011":
      return `Missing required value for ${formatValue(target)}.`;
    case "P1001":
    case "P1002":
      return "Cannot reach the database. Is PostgreSQL running and DATABASE_URL correct?";
    default:
      break;
  }

  // Constraint violations raised by the database driver arrive without a Prisma error code.
  const message = error.message || "";
  if (/foreign key constraint|violates RESTRICT|23503|23001/i.test(message)) {
    return "Cannot delete or change this record: other records still reference it. Remove those first.";
  }
  if (/23505|duplicate key value/i.test(message)) {
    return "A record with that value already exists.";
  }
  return null;
}

function condenseMessage(message) {
  const databaseMessage = /message: "([^"]+)"/.exec(message);
  if (databaseMessage) {
    return databaseMessage[1];
  }
  const lines = message.split("\n").map((line) => line.trim()).filter(Boolean);
  return lines[lines.length - 1] || message;
}

function reportError(error) {
  const friendly = describePrismaError(error);
  console.log(`\n  ! ${friendly || condenseMessage(error.message || String(error))}`);
}

const RELATION_SOURCES = {
  department: {
    modelKey: "department",
    query: { orderBy: { code: "asc" } },
    label: (record) => `${record.code} - ${record.nameEn}`
  },
  academicYear: {
    modelKey: "academicYear",
    query: { orderBy: { startDate: "desc" } },
    label: (record) => `${record.name}${record.isCurrent ? " (current)" : ""}`
  },
  class: {
    modelKey: "class",
    query: { orderBy: { nameEn: "asc" }, include: { department: true, academicYear: true } },
    label: (record) => `${record.nameEn} [${record.department.code} / ${record.academicYear.name}]`
  },
  student: {
    modelKey: "student",
    query: { orderBy: { createdAt: "desc" } },
    label: (record) =>
      `${record.fullNameEn || record.fullNameUr || "(unnamed)"}${
        record.registrationNumber ? ` [${record.registrationNumber}]` : ""
      }`
  },
  teacher: {
    modelKey: "teacher",
    query: { orderBy: { employeeNumber: "asc" } },
    label: (record) => `${record.employeeNumber} - ${record.firstName} ${record.lastName || ""}`.trim()
  },
  sponsor: {
    modelKey: "sponsor",
    query: { orderBy: { name: "asc" } },
    label: (record) => record.name
  },
  inventoryItem: {
    modelKey: "inventoryItem",
    query: { orderBy: { nameEn: "asc" } },
    label: (record) => `${record.nameEn} (${record.unit})`
  },
  prizeCategory: {
    modelKey: "prizeCategory",
    query: { orderBy: { nameEn: "asc" } },
    label: (record) => record.nameEn
  }
};

async function pickRelation(field, { allowSkip, allowClear = false }) {
  const source = RELATION_SOURCES[field.source];
  const records = await prisma[source.modelKey].findMany({ ...source.query, take: 100 });

  if (records.length === 0) {
    throw new Error(`No ${field.label} records exist yet. Create one first.`);
  }

  while (true) {
    console.log(`\n  ${field.label}:`);
    records.forEach((record, index) => {
      console.log(`   ${String(index + 1).padStart(2)}) ${source.label(record)}`);
    });

    const hints = [];
    if (allowSkip) {
      hints.push("Enter to skip");
    }
    if (allowClear) {
      hints.push("0 to clear");
    }
    const answer = await ask(`  Select ${field.label}${hints.length ? ` (${hints.join(", ")})` : ""}: `);
    if (answer === "" && allowSkip) {
      return undefined;
    }
    if (answer === "0" && allowClear) {
      return null;
    }

    const index = Number(answer);
    if (Number.isInteger(index) && index >= 1 && index <= records.length) {
      return records[index - 1].id;
    }
    console.log("  Invalid selection.");
  }
}

async function pickEnum(field, { allowSkip, current }) {
  while (true) {
    console.log(`\n  ${field.label}:`);
    field.values.forEach((value, index) => {
      const marker = value === current ? " (current)" : "";
      console.log(`   ${String(index + 1).padStart(2)}) ${value}${marker}`);
    });

    const hint = allowSkip ? " (Enter to skip)" : "";
    const answer = await ask(`  Select ${field.label}${hint}: `);
    if (answer === "" && allowSkip) {
      return undefined;
    }

    const index = Number(answer);
    if (Number.isInteger(index) && index >= 1 && index <= field.values.length) {
      return field.values[index - 1];
    }
    console.log("  Invalid selection.");
  }
}

function fieldPrompt(field, current) {
  const parts = [];
  if (current !== undefined) {
    parts.push(`current: ${field.type === "time" ? formatDateTime(current) : formatValue(current)}`);
    parts.push(field.required ? "Enter to keep" : "Enter to keep, - to clear");
  } else {
    parts.push(field.required ? "required" : "optional");
    if (field.hint) {
      parts.push(field.hint);
    }
  }
  return `  ${field.label} (${parts.join(", ")}): `;
}

async function promptField(field, current, context) {
  const isEditing = current !== undefined;
  const allowSkip = isEditing || !field.required;

  while (true) {
    if (field.type === "enum" || field.type === "relation") {
      const picked =
        field.type === "enum"
          ? await pickEnum(field, { allowSkip, current })
          : await pickRelation(field, { allowSkip, allowClear: isEditing && !field.required });
      if (picked === undefined && !allowSkip) {
        continue;
      }
      return picked;
    }

    const answer = await ask(fieldPrompt(field, current));

    if (answer === "") {
      if (allowSkip) {
        return undefined;
      }
      console.log("  This field is required.");
      continue;
    }

    if (answer === "-" && isEditing && !field.required) {
      return null;
    }

    try {
      return await parseFieldValue(field, answer, context);
    } catch (error) {
      if (error instanceof ExitSignal) {
        throw error;
      }
      console.log(`  ${error.message}`);
    }
  }
}

async function parseFieldValue(field, answer, context) {
  switch (field.type) {
    case "int":
      return parseInteger(answer);
    case "float":
      return parseFloatValue(answer);
    case "decimal":
      return parseDecimal(answer);
    case "boolean":
      return parseBoolean(answer);
    case "date":
      return parseDate(answer);
    case "time":
      return parseTime(answer, field, context);
    case "password":
      return bcrypt.hash(answer, 12);
    default:
      return answer;
  }
}

function inventoryStock(transactions) {
  return transactions.reduce((total, transaction) => {
    const sign = transaction.type === "USAGE" || transaction.type === "DAMAGED" ? -1 : 1;
    return total + sign * transaction.quantity;
  }, 0);
}

/** Department and class are not stored on Student, so they are read from the active admission or enrollment. */
const STUDENT_PLACEMENT_INCLUDE = {
  admissions: {
    where: { status: "ACTIVE" },
    orderBy: { admissionDate: "desc" },
    take: 1,
    include: { department: true, class: true }
  },
  enrollments: {
    where: { status: "ACTIVE" },
    orderBy: { enrollmentDate: "desc" },
    take: 1,
    include: { department: true, class: true }
  }
};

function studentName(student) {
  if (!student) {
    return null;
  }
  return student.fullNameEn || student.fullNameUr || "(unnamed)";
}

function studentFatherName(student) {
  if (!student) {
    return null;
  }
  return student.fatherNameEn || student.fatherNameUr;
}

function studentPlacement(student) {
  const admission = student && student.admissions ? student.admissions[0] : null;
  const enrollment = student && student.enrollments ? student.enrollments[0] : null;
  const placement = admission || enrollment;
  if (!placement) {
    return { department: null, className: null };
  }
  return {
    department: placement.department ? placement.department.nameEn : null,
    className: placement.class ? placement.class.nameEn : null
  };
}

async function pickStudentWithSummary() {
  while (true) {
    const studentId = await pickRelation({ label: "Student", source: "student" }, { allowSkip: false });
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: STUDENT_PLACEMENT_INCLUDE
    });
    const placement = studentPlacement(student);

    console.log("\n  Selected student:");
    console.log(`    Student name: ${studentName(student)}`);
    console.log(`    Father name:  ${formatValue(studentFatherName(student))}`);
    console.log(`    Department:   ${formatValue(placement.department)}`);
    console.log(`    Class:        ${formatValue(placement.className)}`);

    if (await confirm("  Use this student?", true)) {
      return student;
    }
  }
}

function formatDuration(sponsorship) {
  const start = formatValue(sponsorship.startDate);
  const end = sponsorship.endDate ? formatValue(sponsorship.endDate) : "Ongoing";
  return `${start} -> ${end}`;
}

async function pickVisitSubject() {
  console.log("\n  Who is the visit for?");
  console.log("   1) Student");
  console.log("   2) Teacher");
  console.log("   3) Neither");

  while (true) {
    const answer = await ask("  Select: ");
    if (answer === "1") {
      const studentId = await pickRelation({ label: "Student", source: "student" }, { allowSkip: false });
      return { studentId, teacherId: null };
    }
    if (answer === "2") {
      const teacherId = await pickRelation({ label: "Teacher", source: "teacher" }, { allowSkip: false });
      return { studentId: null, teacherId };
    }
    if (answer === "3") {
      return { studentId: null, teacherId: null };
    }
    console.log("  Invalid selection.");
  }
}

function visitSubject(visit) {
  if (visit.student) {
    return `${studentName(visit.student)} (student)`;
  }
  if (visit.teacher) {
    return `${visit.teacher.firstName} ${visit.teacher.lastName || ""}`.trim() + " (teacher)";
  }
  return null;
}

const ENTITIES = [
  {
    key: "inventoryItem",
    title: "Inventory Items",
    modelKey: "inventoryItem",
    query: { orderBy: { nameEn: "asc" }, include: { transactions: true } },
    searchFields: ["nameEn", "nameUr", "unit"],
    label: (record) => `${record.nameEn} (${record.unit})`,
    columns: [
      { header: "Name (En)", get: (record) => record.nameEn },
      { header: "Name (Ur)", get: (record) => record.nameUr },
      { header: "Unit", get: (record) => record.unit },
      { header: "In stock", get: (record) => (record.transactions ? inventoryStock(record.transactions) : "?") },
      { header: "Min qty", get: (record) => record.minimumQuantity },
      { header: "Active", get: (record) => record.isActive }
    ],
    fields: [
      { name: "nameEn", label: "Name (English)", type: "string", required: true },
      { name: "nameUr", label: "Name (Urdu)", type: "string" },
      { name: "unit", label: "Unit", type: "string", required: true, hint: "e.g. kg, litre, piece" },
      { name: "minimumQuantity", label: "Minimum quantity", type: "float", hint: "defaults to 0" },
      { name: "isActive", label: "Active", type: "boolean", hint: "defaults to yes" }
    ]
  },
  {
    key: "inventoryTransaction",
    title: "Inventory Transactions",
    modelKey: "inventoryTransaction",
    query: { orderBy: { transactionDate: "desc" }, include: { item: true } },
    label: (record) => `${record.type} ${record.quantity} of ${record.item ? record.item.nameEn : record.itemId}`,
    filterPrompt: async () => {
      const itemId = await pickRelation(
        { label: "Inventory item", source: "inventoryItem" },
        { allowSkip: true }
      );
      return itemId ? { itemId } : {};
    },
    columns: [
      { header: "Date", get: (record) => record.transactionDate },
      { header: "Item", get: (record) => (record.item ? record.item.nameEn : record.itemId) },
      { header: "Type", get: (record) => record.type },
      { header: "Quantity", get: (record) => record.quantity },
      { header: "Remarks", get: (record) => record.remarks }
    ],
    fields: [
      { name: "itemId", label: "Inventory item", type: "relation", source: "inventoryItem", required: true },
      {
        name: "type",
        label: "Transaction type",
        type: "enum",
        values: Object.values(InventoryTransactionType),
        required: true
      },
      { name: "quantity", label: "Quantity", type: "float", required: true },
      { name: "transactionDate", label: "Transaction date", type: "date", hint: "defaults to now" },
      { name: "remarks", label: "Remarks", type: "string" }
    ]
  },
  {
    key: "student",
    title: "Students",
    modelKey: "student",
    query: { orderBy: { createdAt: "desc" } },
    searchFields: ["fullNameEn", "fullNameUr", "fatherNameEn", "registrationNumber"],
    label: (record) => `${record.fullNameEn || record.fullNameUr || "(unnamed)"}`,
    columns: [
      { header: "Reg #", get: (record) => record.registrationNumber },
      { header: "Name (En)", get: (record) => record.fullNameEn },
      { header: "Name (Ur)", get: (record) => record.fullNameUr },
      { header: "Father (En)", get: (record) => record.fatherNameEn },
      { header: "Gender", get: (record) => record.gender },
      { header: "Status", get: (record) => record.status }
    ],
    fields: [
      { name: "fullNameEn", label: "Full name (English)", type: "string", required: true },
      { name: "fullNameUr", label: "Full name (Urdu)", type: "string" },
      { name: "fatherNameEn", label: "Father name (English)", type: "string" },
      { name: "registrationNumber", label: "Registration number", type: "string" },
      { name: "gender", label: "Gender", type: "enum", values: Object.values(Gender) },
      { name: "dateOfBirth", label: "Date of birth", type: "date" },
      { name: "phonePrimary", label: "Primary phone", type: "string" },
      {
        name: "status",
        label: "Status",
        type: "enum",
        values: Object.values(StudentStatus),
        hint: "defaults to ACTIVE"
      },
      { name: "fatherNameUr", label: "Father name (Urdu)", type: "string", extended: true },
      { name: "nationality", label: "Nationality", type: "string", extended: true },
      { name: "religion", label: "Religion", type: "string", extended: true },
      { name: "bFormNumber", label: "B-Form number", type: "string", extended: true },
      { name: "cnicNumber", label: "CNIC number", type: "string", extended: true },
      { name: "phoneSecondary", label: "Secondary phone", type: "string", extended: true },
      { name: "phoneEmergency", label: "Emergency phone", type: "string", extended: true },
      { name: "email", label: "Email", type: "string", extended: true },
      { name: "permanentAddress", label: "Permanent address", type: "string", extended: true },
      { name: "currentAddress", label: "Current address", type: "string", extended: true },
      { name: "city", label: "City", type: "string", extended: true },
      { name: "district", label: "District", type: "string", extended: true },
      { name: "photoUrl", label: "Photo URL", type: "string", extended: true }
    ]
  },
  {
    key: "department",
    title: "Departments",
    modelKey: "department",
    query: { orderBy: { code: "asc" } },
    searchFields: ["code", "nameEn", "nameUr"],
    label: (record) => `${record.code} - ${record.nameEn}`,
    columns: [
      { header: "Code", get: (record) => record.code },
      { header: "Name (En)", get: (record) => record.nameEn },
      { header: "Name (Ur)", get: (record) => record.nameUr },
      { header: "Active", get: (record) => record.isActive }
    ],
    fields: [
      { name: "code", label: "Code", type: "string", required: true, hint: "unique, e.g. SCHOOL" },
      { name: "nameEn", label: "Name (English)", type: "string", required: true },
      { name: "nameUr", label: "Name (Urdu)", type: "string", required: true },
      { name: "descriptionEn", label: "Description (English)", type: "string", extended: true },
      { name: "descriptionUr", label: "Description (Urdu)", type: "string", extended: true },
      { name: "isActive", label: "Active", type: "boolean", extended: true }
    ]
  },
  {
    key: "academicYear",
    title: "Academic Years",
    modelKey: "academicYear",
    query: { orderBy: { startDate: "desc" } },
    searchFields: ["name"],
    label: (record) => record.name,
    columns: [
      { header: "Name", get: (record) => record.name },
      { header: "Start", get: (record) => record.startDate },
      { header: "End", get: (record) => record.endDate },
      { header: "Current", get: (record) => record.isCurrent },
      { header: "Active", get: (record) => record.isActive }
    ],
    fields: [
      { name: "name", label: "Name", type: "string", required: true, hint: "unique, e.g. 2025-2026" },
      { name: "startDate", label: "Start date", type: "date", required: true, hint: "YYYY-MM-DD" },
      { name: "endDate", label: "End date", type: "date", required: true, hint: "YYYY-MM-DD" },
      { name: "isCurrent", label: "Is current year", type: "boolean" },
      { name: "isActive", label: "Active", type: "boolean", extended: true }
    ]
  },
  {
    key: "class",
    title: "Classes",
    modelKey: "class",
    query: { orderBy: { nameEn: "asc" }, include: { department: true, academicYear: true } },
    searchFields: ["nameEn", "nameUr", "code"],
    label: (record) => record.nameEn,
    columns: [
      { header: "Name (En)", get: (record) => record.nameEn },
      { header: "Code", get: (record) => record.code },
      { header: "Department", get: (record) => (record.department ? record.department.code : record.departmentId) },
      { header: "Year", get: (record) => (record.academicYear ? record.academicYear.name : record.academicYearId) },
      { header: "Capacity", get: (record) => record.capacity },
      { header: "Active", get: (record) => record.isActive }
    ],
    fields: [
      { name: "departmentId", label: "Department", type: "relation", source: "department", required: true },
      { name: "academicYearId", label: "Academic year", type: "relation", source: "academicYear", required: true },
      { name: "nameEn", label: "Name (English)", type: "string", required: true },
      { name: "nameUr", label: "Name (Urdu)", type: "string" },
      { name: "code", label: "Code", type: "string" },
      { name: "capacity", label: "Capacity", type: "int" },
      { name: "classType", label: "Class type", type: "string", extended: true },
      { name: "isActive", label: "Active", type: "boolean", extended: true }
    ]
  },
  {
    key: "teacher",
    title: "Teachers",
    modelKey: "teacher",
    query: { orderBy: { employeeNumber: "asc" } },
    searchFields: ["employeeNumber", "firstName", "lastName", "cnic"],
    label: (record) => `${record.firstName} ${record.lastName || ""}`.trim(),
    columns: [
      { header: "Employee #", get: (record) => record.employeeNumber },
      { header: "First name", get: (record) => record.firstName },
      { header: "Last name", get: (record) => record.lastName },
      { header: "Phone", get: (record) => record.phone },
      { header: "Joined", get: (record) => record.joiningDate },
      { header: "Status", get: (record) => record.status }
    ],
    fields: [
      { name: "employeeNumber", label: "Employee number", type: "string", required: true, hint: "unique" },
      { name: "firstName", label: "First name", type: "string", required: true },
      { name: "lastName", label: "Last name", type: "string" },
      { name: "fatherName", label: "Father name", type: "string" },
      { name: "phone", label: "Phone", type: "string" },
      { name: "joiningDate", label: "Joining date", type: "date" },
      { name: "cnic", label: "CNIC", type: "string", extended: true },
      { name: "email", label: "Email", type: "string", extended: true },
      { name: "address", label: "Address", type: "string", extended: true },
      { name: "status", label: "Status", type: "string", extended: true, hint: "defaults to ACTIVE" }
    ]
  },
  {
    key: "visit",
    title: "Visitors",
    modelKey: "visit",
    query: { orderBy: { visitDate: "desc" }, include: { student: true, teacher: true } },
    searchFields: ["visitorName", "visitorCnic", "visitorRelation"],
    label: (record) => `${record.visitorName} on ${formatValue(record.visitDate)}`,
    prepareCreate: pickVisitSubject,
    columns: [
      { header: "Visit date", get: (record) => record.visitDate },
      { header: "Visitor", get: (record) => record.visitorName },
      { header: "Visited", get: (record) => visitSubject(record) },
      { header: "Relation", get: (record) => record.visitorRelation },
      { header: "Visit time", get: (record) => formatTime(record.checkInTime) },
      { header: "CNIC", get: (record) => record.visitorCnic }
    ],
    fields: [
      { name: "visitDate", label: "Visit date", type: "date", required: true, hint: "YYYY-MM-DD" },
      { name: "visitorName", label: "Visitor name", type: "string", required: true },
      {
        name: "visitorRelation",
        label: "Relation to student/teacher",
        type: "string",
        hint: "e.g. father, uncle"
      },
      { name: "visitorCnic", label: "Visitor CNIC", type: "string" },
      { name: "visitorAddress", label: "Visitor address", type: "string" },
      {
        name: "checkInTime",
        label: "Visit time",
        type: "time",
        anchorField: "visitDate",
        hint: "HH:MM, 24-hour"
      },
      { name: "reason", label: "Reason for visit", type: "string" },
      { name: "details", label: "Visit details", type: "string" },
      {
        name: "checkOutTime",
        label: "Check-out time",
        type: "time",
        anchorField: "visitDate",
        extended: true,
        hint: "HH:MM, 24-hour"
      },
      { name: "visitorPhone", label: "Visitor phone", type: "string", extended: true },
      { name: "studentId", label: "Student visited", type: "relation", source: "student" },
      { name: "teacherId", label: "Teacher visited", type: "relation", source: "teacher" }
    ]
  },
  {
    key: "prizeCategory",
    title: "Prize Categories",
    modelKey: "prizeCategory",
    query: { orderBy: { nameEn: "asc" } },
    searchFields: ["nameEn", "nameUr"],
    label: (record) => record.nameEn,
    columns: [
      { header: "Name (En)", get: (record) => record.nameEn },
      { header: "Name (Ur)", get: (record) => record.nameUr },
      { header: "Description (En)", get: (record) => record.descriptionEn },
      { header: "Description (Ur)", get: (record) => record.descriptionUr }
    ],
    fields: [
      { name: "nameEn", label: "Name (English)", type: "string", required: true, hint: "unique" },
      { name: "nameUr", label: "Name (Urdu)", type: "string" },
      { name: "descriptionEn", label: "Description (English)", type: "string", extended: true },
      { name: "descriptionUr", label: "Description (Urdu)", type: "string", extended: true }
    ]
  },
  {
    key: "studentPrize",
    title: "Prizes",
    modelKey: "studentPrize",
    query: {
      orderBy: { awardDate: "desc" },
      include: { student: { include: STUDENT_PLACEMENT_INCLUDE }, category: true }
    },
    label: (record) => `${record.prizeName || "prize"} for ${studentName(record.student)}`,
    prepareCreate: async () => {
      const student = await pickStudentWithSummary();
      return { studentId: student.id };
    },
    columns: [
      { header: "Award date", get: (record) => record.awardDate },
      { header: "Student name", get: (record) => studentName(record.student) },
      { header: "Father name", get: (record) => studentFatherName(record.student) },
      { header: "Department", get: (record) => studentPlacement(record.student).department },
      { header: "Class", get: (record) => studentPlacement(record.student).className },
      { header: "Category", get: (record) => (record.category ? record.category.nameEn : record.categoryId) },
      { header: "Prize won", get: (record) => record.prizeName },
      { header: "Certificate #", get: (record) => record.certificateNumber }
    ],
    fields: [
      { name: "studentId", label: "Student", type: "relation", source: "student", required: true },
      { name: "categoryId", label: "Prize category", type: "relation", source: "prizeCategory", required: true },
      { name: "awardDate", label: "Prize awarding date", type: "date", required: true, hint: "YYYY-MM-DD" },
      { name: "competitionName", label: "Competition name", type: "string" },
      { name: "prizeName", label: "Prize won", type: "string" },
      { name: "certificateNumber", label: "Certificate number", type: "string", hint: "if provided" },
      { name: "remarks", label: "Remarks", type: "string", extended: true }
    ]
  },
  {
    key: "sponsor",
    title: "Sponsors",
    customMenu: sponsorMenu
  },
  {
    key: "user",
    title: "Users",
    modelKey: "user",
    query: { orderBy: { username: "asc" } },
    searchFields: ["username", "fullName"],
    label: (record) => `${record.username} (${record.fullName})`,
    hideFields: ["passwordHash"],
    columns: [
      { header: "Username", get: (record) => record.username },
      { header: "Full name", get: (record) => record.fullName },
      { header: "Role", get: (record) => record.role },
      { header: "Active", get: (record) => record.isActive },
      { header: "Last login", get: (record) => record.lastLogin }
    ],
    fields: [
      { name: "username", label: "Username", type: "string", required: true, hint: "unique" },
      { name: "fullName", label: "Full name", type: "string", required: true },
      {
        name: "passwordHash",
        label: "Password",
        type: "password",
        required: true,
        hint: "stored hashed, typed characters are visible"
      },
      { name: "role", label: "Role", type: "enum", values: Object.values(UserRole), hint: "defaults to DATA_ENTRY" },
      { name: "isActive", label: "Active", type: "boolean", extended: true }
    ]
  }
];

const SPONSOR_ENTITY = {
  key: "sponsorRecord",
  title: "Sponsor",
  modelKey: "sponsor",
  query: { orderBy: { name: "asc" }, include: { sponsorships: { include: { student: true } } } },
  searchFields: ["name", "address", "phone", "reference"],
  label: (record) => record.name,
  columns: [
    { header: "Sponsor name", get: (record) => record.name },
    { header: "Address", get: (record) => record.address },
    { header: "Contact", get: (record) => record.phone },
    { header: "Reference", get: (record) => record.reference },
    { header: "Sponsorships", get: (record) => (record.sponsorships ? record.sponsorships.length : "?") },
    { header: "Active", get: (record) => record.isActive }
  ],
  fields: [
    { name: "name", label: "Sponsor name", type: "string", required: true },
    { name: "address", label: "Address", type: "string" },
    { name: "phone", label: "Contact", type: "string" },
    { name: "reference", label: "Reference", type: "string" },
    { name: "isActive", label: "Active", type: "boolean", extended: true }
  ]
};

const SPONSORSHIP_ENTITY = {
  key: "sponsorshipRecord",
  title: "Sponsorship",
  modelKey: "sponsorship",
  query: { orderBy: { startDate: "desc" }, include: { sponsor: true, student: true } },
  label: (record) =>
    `${record.sponsor ? record.sponsor.name : "sponsor"} -> ${studentName(record.student)} (${record.amount})`,
  prepareCreate: async () => {
    const student = await pickStudentWithSummary();
    return { studentId: student.id };
  },
  columns: [
    { header: "Sponsor name", get: (record) => (record.sponsor ? record.sponsor.name : record.sponsorId) },
    { header: "Amount", get: (record) => record.amount.toFixed(2) },
    { header: "Student name", get: (record) => studentName(record.student) },
    { header: "Student father name", get: (record) => studentFatherName(record.student) },
    { header: "Duration", get: (record) => formatDuration(record) },
    { header: "Status", get: (record) => record.status }
  ],
  fields: [
    { name: "sponsorId", label: "Sponsor", type: "relation", source: "sponsor", required: true },
    { name: "amount", label: "Amount", type: "decimal", required: true, hint: "e.g. 5000.00" },
    { name: "studentId", label: "Student", type: "relation", source: "student", required: true },
    { name: "startDate", label: "Duration start date", type: "date", required: true, hint: "YYYY-MM-DD" },
    { name: "endDate", label: "Duration end date", type: "date", hint: "blank means ongoing" },
    { name: "status", label: "Status", type: "string", extended: true, hint: "defaults to ACTIVE" }
  ]
};

const SPONSOR_COMBINED_COLUMNS = [
  { header: "Sr No", get: (row) => row.srNo },
  { header: "Sponsor Name", get: (row) => row.sponsor.name },
  { header: "Address", get: (row) => row.sponsor.address },
  { header: "Contact", get: (row) => row.sponsor.phone },
  { header: "Amount", get: (row) => (row.sponsorship ? row.sponsorship.amount.toFixed(2) : null) },
  { header: "Student name", get: (row) => (row.sponsorship ? studentName(row.sponsorship.student) : null) },
  {
    header: "Student father name",
    get: (row) => (row.sponsorship ? studentFatherName(row.sponsorship.student) : null)
  },
  { header: "Duration", get: (row) => (row.sponsorship ? formatDuration(row.sponsorship) : null) },
  { header: "Reference", get: (row) => row.sponsor.reference }
];

async function listSponsorCombined() {
  const sponsors = await prisma.sponsor.findMany({
    orderBy: { name: "asc" },
    include: { sponsorships: { orderBy: { startDate: "asc" }, include: { student: true } } }
  });

  if (sponsors.length === 0) {
    console.log("\n  No sponsors found.");
    return;
  }

  const rows = [];
  for (const sponsor of sponsors) {
    if (sponsor.sponsorships.length === 0) {
      rows.push({ srNo: rows.length + 1, sponsor, sponsorship: null });
      continue;
    }
    for (const sponsorship of sponsor.sponsorships) {
      rows.push({ srNo: rows.length + 1, sponsor, sponsorship });
    }
  }

  printTable(SPONSOR_COMBINED_COLUMNS, rows);
}

async function createSponsorWithSponsorship() {
  const sponsor = await createRecord(SPONSOR_ENTITY);
  if (sponsor && (await confirm("\n  Add a sponsorship for this sponsor now?", true))) {
    await createRecord(SPONSORSHIP_ENTITY, { sponsorId: sponsor.id });
  }
}

async function addSponsorshipToSponsor() {
  const sponsor = await pickRecord(SPONSOR_ENTITY, "add a sponsorship to");
  if (sponsor) {
    await createRecord(SPONSORSHIP_ENTITY, { sponsorId: sponsor.id });
  }
}

async function sponsorMenu() {
  const actions = {
    1: listSponsorCombined,
    2: createSponsorWithSponsorship,
    3: addSponsorshipToSponsor,
    4: () => updateRecord(SPONSOR_ENTITY),
    5: () => updateRecord(SPONSORSHIP_ENTITY),
    6: () => viewRecord(SPONSOR_ENTITY),
    7: () => deleteRecord(SPONSORSHIP_ENTITY),
    8: () => deleteRecord(SPONSOR_ENTITY)
  };

  while (true) {
    console.log("\n=== Sponsors ===");
    console.log("  1) List sponsors & sponsorships");
    console.log("  2) Add sponsor (with optional sponsorship)");
    console.log("  3) Add sponsorship to an existing sponsor");
    console.log("  4) Update sponsor details");
    console.log("  5) Update sponsorship");
    console.log("  6) View sponsor details");
    console.log("  7) Delete sponsorship");
    console.log("  8) Delete sponsor");
    console.log("  0) Back");

    const choice = await ask("\nChoice: ");
    if (choice === "0") {
      return;
    }

    const action = actions[choice];
    if (!action) {
      console.log("  Invalid choice.");
      continue;
    }

    try {
      await action();
    } catch (error) {
      if (error instanceof ExitSignal) {
        throw error;
      }
      reportError(error);
    }
  }
}

function fieldDisplayValue(field, record, changed) {
  if (field.type === "password") {
    return "***";
  }
  if (field.type === "time") {
    return formatDateTime(record[field.name]);
  }
  if (field.type === "relation" && !changed) {
    const related = record[field.name.replace(/Id$/, "")];
    if (related) {
      return RELATION_SOURCES[field.source].label(related);
    }
  }
  return formatValue(record[field.name]);
}

function sanitize(entity, record) {
  if (!entity.hideFields) {
    return record;
  }
  const copy = { ...record };
  for (const field of entity.hideFields) {
    copy[field] = "***";
  }
  return copy;
}

function buildSearchWhere(entity, term) {
  return {
    OR: entity.searchFields.map((field) => ({ [field]: { contains: term, mode: "insensitive" } }))
  };
}

async function listRecords(entity) {
  const where = entity.filterPrompt ? await entity.filterPrompt() : {};
  const records = await prisma[entity.modelKey].findMany({ ...entity.query, where, take: PAGE_SIZE * 4 });

  if (records.length === 0) {
    console.log("\n  No records found.");
    return;
  }
  printTable(entity.columns, records);
}

async function pickRecord(entity, action) {
  let where = {};

  while (true) {
    const records = await prisma[entity.modelKey].findMany({ ...entity.query, where, take: PAGE_SIZE });
    if (records.length === 0) {
      console.log("\n  No records found.");
      return null;
    }

    printTable(entity.columns, records, { numbered: true });

    const searchHint = entity.searchFields ? ", s to search" : "";
    const answer = await ask(`\n  Select record to ${action} (0 to cancel${searchHint}): `);

    if (answer === "0" || answer === "") {
      return null;
    }
    if (answer.toLowerCase() === "s" && entity.searchFields) {
      const term = await ask("  Search term: ");
      where = term === "" ? {} : buildSearchWhere(entity, term);
      continue;
    }

    const index = Number(answer);
    if (Number.isInteger(index) && index >= 1 && index <= records.length) {
      return records[index - 1];
    }
    console.log("  Invalid selection.");
  }
}

async function createRecord(entity, preset = {}) {
  console.log(`\n-- New ${entity.title} record --`);
  const data = { ...preset, ...(entity.prepareCreate ? await entity.prepareCreate() : {}) };

  for (const field of entity.fields.filter((field) => !field.extended && !(field.name in data))) {
    const value = await promptField(field, undefined, data);
    if (value !== undefined) {
      data[field.name] = value;
    }
  }

  const extendedFields = entity.fields.filter((field) => field.extended && !(field.name in data));
  if (extendedFields.length > 0 && (await confirm("\n  Fill in the additional optional fields?"))) {
    for (const field of extendedFields) {
      const value = await promptField(field, undefined, data);
      if (value !== undefined) {
        data[field.name] = value;
      }
    }
  }

  const created = await prisma[entity.modelKey].create({ data });
  console.log("\n  Created successfully:");
  printJson(sanitize(entity, created));
  return created;
}

async function updateRecord(entity) {
  const record = await pickRecord(entity, "update");
  if (!record) {
    return;
  }

  const changes = {};

  while (true) {
    const merged = { ...record, ...changes };
    console.log(`\n-- Editing: ${entity.label(merged)} --`);
    entity.fields.forEach((field, index) => {
      const current = fieldDisplayValue(field, merged, field.name in changes);
      console.log(`   ${String(index + 1).padStart(2)}) ${field.label}: ${current}`);
    });

    const answer = await ask("\n  Field number to change (s to save, 0 to cancel): ");
    if (answer === "0") {
      console.log("  Cancelled, no changes saved.");
      return;
    }
    if (answer.toLowerCase() === "s" || answer === "") {
      break;
    }

    const index = Number(answer);
    if (!Number.isInteger(index) || index < 1 || index > entity.fields.length) {
      console.log("  Invalid selection.");
      continue;
    }

    const field = entity.fields[index - 1];
    const current = merged[field.name] === undefined ? null : merged[field.name];
    const value = await promptField(field, current, merged);
    if (value !== undefined) {
      changes[field.name] = value;
    }
  }

  if (Object.keys(changes).length === 0) {
    console.log("  Nothing changed.");
    return;
  }

  const updated = await prisma[entity.modelKey].update({ where: { id: record.id }, data: changes });
  console.log("\n  Updated successfully:");
  printJson(sanitize(entity, updated));
}

async function deleteRecord(entity) {
  const record = await pickRecord(entity, "delete");
  if (!record) {
    return;
  }

  console.log("\n  About to delete:");
  printJson(sanitize(entity, record));

  if (!(await confirm(`\n  Permanently delete "${entity.label(record)}"?`))) {
    console.log("  Cancelled.");
    return;
  }

  await prisma[entity.modelKey].delete({ where: { id: record.id } });
  console.log("  Deleted.");
}

async function viewRecord(entity) {
  const record = await pickRecord(entity, "view");
  if (!record) {
    return;
  }
  printJson(sanitize(entity, record));
}

const STAT_MODELS = [
  ["Users", "user"],
  ["Departments", "department"],
  ["Academic years", "academicYear"],
  ["Classes", "class"],
  ["Students", "student"],
  ["Guardians", "guardian"],
  ["Student admissions", "studentAdmission"],
  ["Student enrollments", "studentEnrollment"],
  ["Student documents", "studentDocument"],
  ["Status history", "studentStatusHistory"],
  ["Teachers", "teacher"],
  ["Teacher departments", "teacherDepartment"],
  ["Timetables", "timetable"],
  ["Timetable entries", "timetableEntry"],
  ["Attendance sessions", "attendanceSession"],
  ["Attendance records", "attendanceRecord"],
  ["Hifz daily reports", "hifzDailyReport"],
  ["Visits", "visit"],
  ["Prize categories", "prizeCategory"],
  ["Student prizes", "studentPrize"],
  ["Inventory items", "inventoryItem"],
  ["Inventory transactions", "inventoryTransaction"],
  ["Sponsors", "sponsor"],
  ["Sponsorships", "sponsorship"],
  ["Board applications", "boardApplication"],
  ["Audit logs", "auditLog"],
  ["Sync queue", "syncQueue"],
  ["Backup logs", "backupLog"]
];

async function showStats() {
  const startedAt = Date.now();
  const [info] = await prisma.$queryRaw`SELECT current_database() AS database, version() AS version`;
  console.log(`\n  Connection OK in ${Date.now() - startedAt} ms`);
  console.log(`  Database: ${info.database}`);
  console.log(`  Server:   ${info.version.split(",")[0]}`);

  const counts = await prisma.$transaction(STAT_MODELS.map(([, modelKey]) => prisma[modelKey].count()));
  const rows = STAT_MODELS.map(([label], index) => ({ label, count: counts[index] }));

  printTable(
    [
      { header: "Table", get: (row) => row.label },
      { header: "Rows", get: (row) => row.count }
    ],
    rows
  );
}

async function entityMenu(entity) {
  if (entity.customMenu) {
    await entity.customMenu();
    return;
  }

  while (true) {
    console.log(`\n=== ${entity.title} ===`);
    console.log("  1) Create");
    console.log("  2) List");
    console.log("  3) View details");
    console.log("  4) Update");
    console.log("  5) Delete");
    console.log("  0) Back");

    const choice = await ask("\nChoice: ");
    const actions = {
      1: createRecord,
      2: listRecords,
      3: viewRecord,
      4: updateRecord,
      5: deleteRecord
    };

    if (choice === "0") {
      return;
    }

    const action = actions[choice];
    if (!action) {
      console.log("  Invalid choice.");
      continue;
    }

    try {
      await action(entity);
    } catch (error) {
      if (error instanceof ExitSignal) {
        throw error;
      }
      reportError(error);
    }
  }
}

async function mainMenu() {
  while (true) {
    console.log("\n==============================================");
    console.log(" Madrassa Management - Database CLI");
    console.log("==============================================");
    ENTITIES.forEach((entity, index) => {
      console.log(` ${String(index + 1).padStart(2)}) ${entity.title}`);
    });
    console.log(` ${String(ENTITIES.length + 1).padStart(2)}) Database stats & health`);
    console.log("  0) Exit");

    const choice = await ask("\nChoice: ");

    if (choice === "0") {
      return;
    }

    const index = Number(choice);
    if (Number.isInteger(index) && index >= 1 && index <= ENTITIES.length) {
      await entityMenu(ENTITIES[index - 1]);
      continue;
    }

    if (index === ENTITIES.length + 1) {
      try {
        await showStats();
      } catch (error) {
        if (error instanceof ExitSignal) {
          throw error;
        }
        reportError(error);
      }
      continue;
    }

    console.log("  Invalid choice.");
  }
}

async function main() {
  rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  rl.on("line", handleLine);
  rl.on("SIGINT", () => rl.close());
  rl.on("close", () => {
    inputClosed = true;
    if (pendingWaiter) {
      const waiter = pendingWaiter;
      pendingWaiter = null;
      waiter.reject(new ExitSignal());
    }
  });

  await mainMenu();
}

main()
  .catch((error) => {
    if (!(error instanceof ExitSignal)) {
      reportError(error);
      process.exitCode = 1;
    }
  })
  .finally(async () => {
    if (rl) {
      rl.close();
    }
    await prisma.$disconnect();
    console.log("\nDisconnected. Goodbye.");
  });
