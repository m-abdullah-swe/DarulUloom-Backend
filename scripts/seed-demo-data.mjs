/**
 * Seed demo data for manual system testing.
 *
 * Creates (idempotent — re-running replaces previous SEED-* rows):
 *   - 2 classes per department (HIFZ / KUTUB / SCHOOL)
 *   - 50 students per department (25 per class) = 150 students
 *   - 6 teachers per department (one per daily lecture subject) = 18 teachers
 *   - public/demo-local-db.json for academics + Hifz/Kutub/School modules
 *     (6 lectures per class, enrollments, student counts)
 *
 * Lectures are frontend-local only (no REST API). The seed writes them to
 * public/demo-local-db.json; the app hydrates that file into localStorage on boot.
 *
 * Prerequisites:
 *   - Backend .env with DATABASE_URL
 *   - `npm run prisma:generate` (and migrate/seed) already done in the backend
 *
 * Usage:
 *   From frontend:  npm run seed:demo
 *   From backend:   npm run seed:demo
 *   Then hard-refresh the frontend (Ctrl+Shift+R)
 */

import { createRequire } from "node:module";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const thisRepoRoot = path.resolve(__dirname, "..");
const siblingFrontend = path.resolve(thisRepoRoot, "../madrassa-management-frontend");
const siblingBackend = path.resolve(thisRepoRoot, "../madrassa-management-backend");

// Works whether this file lives in the frontend or backend repo.
const backendRoot = existsSync(path.join(thisRepoRoot, "prisma", "schema.prisma"))
  ? thisRepoRoot
  : siblingBackend;
const frontendRoot = existsSync(path.join(thisRepoRoot, "vite.config.ts"))
  || existsSync(path.join(thisRepoRoot, "vite.config.js"))
  ? thisRepoRoot
  : siblingFrontend;
const outputDir = path.join(__dirname, "seed-output");

if (!existsSync(path.join(backendRoot, "prisma", "schema.prisma"))) {
  console.error(`Backend not found at ${backendRoot}`);
  process.exit(1);
}
if (!existsSync(frontendRoot)) {
  console.error(`Frontend not found at ${frontendRoot}`);
  process.exit(1);
}

const require = createRequire(import.meta.url);

try {
  require(path.join(backendRoot, "node_modules/dotenv")).config({
    path: path.join(backendRoot, ".env"),
  });
} catch {
  console.error("Could not load backend dotenv. Is ../madrassa-management-backend installed?");
  process.exit(1);
}

let PrismaClient;
try {
  ({ PrismaClient } = require(path.join(backendRoot, "node_modules/@prisma/client")));
} catch {
  console.error(
    "Could not load @prisma/client from the backend. Run `npm run prisma:generate` there first.",
  );
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is missing. Set it in the backend .env file.");
  process.exit(1);
}

const prisma = new PrismaClient();

const STUDENTS_PER_DEPT = 50;
const CLASSES_PER_DEPT = 2;
const LECTURES_PER_CLASS = 6;
const SEED_PREFIX = "SEED-";

const DEPARTMENTS = [
  {
    code: "HIFZ",
    moduleId: "hifz",
    classNames: [
      { nameEn: "Hifz Class A", nameUr: "حفظ کلاس اے", code: "SEED-HFZ-A" },
      { nameEn: "Hifz Class B", nameUr: "حفظ کلاس بی", code: "SEED-HFZ-B" },
    ],
    subjects: [
      "Nazira",
      "Hifz Sabaq",
      "Sabqi",
      "Manzil",
      "Tajweed",
      "Tarbiyah",
    ],
  },
  {
    code: "KUTUB",
    moduleId: "kutub",
    classNames: [
      { nameEn: "Kutub Class A", nameUr: "کتب کلاس اے", code: "SEED-KTB-A" },
      { nameEn: "Kutub Class B", nameUr: "کتب کلاس بی", code: "SEED-KTB-B" },
    ],
    subjects: ["Nahw", "Sarf", "Fiqh", "Hadith", "Tafsir", "Adab"],
  },
  {
    code: "SCHOOL",
    moduleId: "school",
    classNames: [
      { nameEn: "School Class A", nameUr: "اسکول کلاس اے", code: "SEED-SCH-A" },
      { nameEn: "School Class B", nameUr: "اسکول کلاس بی", code: "SEED-SCH-B" },
    ],
    subjects: [
      "Mathematics",
      "English",
      "Urdu",
      "Science",
      "Islamiyat",
      "Pakistan Studies",
    ],
  },
];

const FIRST_NAMES = [
  "Ahmed", "Hassan", "Usman", "Bilal", "Yusuf", "Hamza", "Omar", "Ibrahim",
  "Zain", "Ali", "Saad", "Fahad", "Tariq", "Imran", "Naveed", "Kashif",
  "Adnan", "Farhan", "Waleed", "Rayyan", "Suleman", "Haroon", "Junaid", "Danish",
  "Ayaan",
];
const FATHER_NAMES = [
  "Muhammad", "Abdul", "Ghulam", "Saeed", "Rashid", "Nadeem", "Javed", "Asif",
  "Khalid", "Shahid", "Akram", "Anwar", "Bashir", "Latif", "Majeed", "Qasim",
  "Rafiq", "Saleem", "Tahir", "Zahid", "Arshad", "Faisal", "Hameed", "Iqbal",
  "Younis",
];
const TEACHER_FIRST = [
  "Maulana", "Qari", "Hafiz", "Mufti", "Ustad", "Sheikh",
];
const TEACHER_LAST = [
  "Siddiqui", "Farooqi", "Usmani", "Qadri", "Chishti", "Ansari",
  "Hashmi", "Naqvi", "Bukhari", "Gilani", "Kazmi", "Razvi",
  "Madani", "Thanvi", "Dehlvi", "Lahori", "Multani", "Karachi",
];

function pad(n, width = 3) {
  return String(n).padStart(width, "0");
}

function isoDate(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function teacherName(deptCode, index) {
  const first = TEACHER_FIRST[index % TEACHER_FIRST.length];
  const last = TEACHER_LAST[(index + deptCode.length) % TEACHER_LAST.length];
  return { firstName: first, lastName: `${last} ${deptCode}` };
}

async function clearPreviousSeed() {
  console.log("Clearing previous SEED-* data…");

  await prisma.timetableEntry.deleteMany({
    where: { teacher: { employeeNumber: { startsWith: SEED_PREFIX } } },
  });

  await prisma.studentEnrollment.deleteMany({
    where: {
      OR: [
        { student: { registrationNumber: { startsWith: SEED_PREFIX } } },
        { class: { code: { startsWith: SEED_PREFIX } } },
      ],
    },
  });

  await prisma.studentAdmission.deleteMany({
    where: { admissionNumber: { startsWith: SEED_PREFIX } },
  });

  await prisma.student.deleteMany({
    where: { registrationNumber: { startsWith: SEED_PREFIX } },
  });

  await prisma.teacher.deleteMany({
    where: { employeeNumber: { startsWith: SEED_PREFIX } },
  });

  await prisma.class.deleteMany({
    where: { code: { startsWith: SEED_PREFIX } },
  });
}

async function ensureLookups() {
  for (const dept of DEPARTMENTS) {
    await prisma.department.upsert({
      where: { code: dept.code },
      update: {},
      create: {
        code: dept.code,
        nameEn: dept.code === "HIFZ" ? "Hifz" : dept.code === "KUTUB" ? "Kutub" : "School",
        nameUr: dept.code === "HIFZ" ? "حفظ" : dept.code === "KUTUB" ? "کتب" : "اسکول",
      },
    });
  }

  const year = await prisma.academicYear.upsert({
    where: { name: "2025-2026" },
    update: { isCurrent: true },
    create: {
      name: "2025-2026",
      startDate: new Date("2025-04-01"),
      endDate: new Date("2026-03-31"),
      isCurrent: true,
    },
  });

  const departments = await prisma.department.findMany({
    where: { code: { in: DEPARTMENTS.map((d) => d.code) } },
  });

  return {
    year,
    departmentByCode: Object.fromEntries(departments.map((d) => [d.code, d])),
  };
}

async function main() {
  console.log("Seeding demo data via backend Prisma…");
  console.log(`Backend: ${backendRoot}`);

  await clearPreviousSeed();
  const { year, departmentByCode } = await ensureLookups();
  const admissionDate = new Date();
  const joiningDate = new Date("2024-08-01");
  const nowIso = new Date().toISOString();

  const payload = {
    version: 1,
    kind: "madrassa-demo-seed",
    createdAt: nowIso,
    academicYear: {
      id: year.id,
      name: year.name,
      isCurrent: true,
      startDate: "2025-04-01",
      endDate: "2026-03-31",
      isActive: true,
      createdAt: nowIso,
      updatedAt: nowIso,
    },
    departments: {},
  };

  let teacherCount = 0;
  let studentCount = 0;

  for (const dept of DEPARTMENTS) {
    const department = departmentByCode[dept.code];
    if (!department) {
      throw new Error(`Department ${dept.code} missing after upsert`);
    }

    console.log(`\n=== ${dept.code} ===`);

    // Teachers (6 per department — one per lecture subject)
    const teachers = [];
    for (let i = 0; i < LECTURES_PER_CLASS; i++) {
      const { firstName, lastName } = teacherName(dept.code, i);
      const employeeNumber = `${SEED_PREFIX}T-${dept.code}-${pad(i + 1, 2)}`;
      const teacher = await prisma.teacher.create({
        data: {
          employeeNumber,
          firstName,
          lastName,
          fatherName: FATHER_NAMES[i % FATHER_NAMES.length],
          cnic: `35202${pad(dept.code.charCodeAt(0), 2)}${pad(i + 1, 6)}`,
          phone: `0300${pad(dept.code.length * 100 + i + 1, 7)}`,
          email: null,
          address: "Darul Uloom Paswal",
          joiningDate,
          status: "ACTIVE",
          departments: {
            create: [{ departmentId: department.id }],
          },
        },
      });
      teachers.push({
        id: teacher.id,
        employeeNumber,
        name: `${firstName} ${lastName}`,
        subject: dept.subjects[i],
      });
      teacherCount += 1;
    }
    console.log(`  Teachers: ${teachers.length}`);

    // Classes (2) + students (25 each)
    const classes = [];
    const studentsPerClass = STUDENTS_PER_DEPT / CLASSES_PER_DEPT;

    for (let c = 0; c < CLASSES_PER_DEPT; c++) {
      const meta = dept.classNames[c];
      const classRecord = await prisma.class.create({
        data: {
          departmentId: department.id,
          academicYearId: year.id,
          nameEn: meta.nameEn,
          nameUr: meta.nameUr,
          code: meta.code,
          capacity: studentsPerClass,
          classType: dept.code,
          isActive: true,
        },
      });

      const classStudents = [];
      for (let s = 0; s < studentsPerClass; s++) {
        const globalIndex = c * studentsPerClass + s + 1;
        const first = FIRST_NAMES[(globalIndex + c) % FIRST_NAMES.length];
        const father = FATHER_NAMES[(globalIndex + c * 3) % FATHER_NAMES.length];
        const fullNameEn = `${first} ${dept.code} ${pad(globalIndex)}`;
        const registrationNumber = `${SEED_PREFIX}${dept.code}-R${pad(globalIndex)}`;
        const admissionNumber = `${SEED_PREFIX}${dept.code}-A${c + 1}-${pad(globalIndex)}`;

        const student = await prisma.student.create({
          data: {
            registrationNumber,
            fullNameEn,
            fullNameUr: null,
            fatherNameEn: father,
            fatherNameUr: null,
            dateOfBirth: new Date(2010 + (globalIndex % 8), (globalIndex % 12), 1 + (globalIndex % 27)),
            gender: "MALE",
            nationality: "Pakistani",
            religion: "Islam",
            phonePrimary: `0311${pad(dept.code.charCodeAt(0) * 10 + globalIndex, 7)}`,
            city: "Paswal",
            district: "Attock",
            admissions: {
              create: {
                admissionNumber,
                registrationNumber,
                admissionDate,
                academicYearId: year.id,
                departmentId: department.id,
                classId: classRecord.id,
                status: "ACTIVE",
                remarks: "Demo seed student",
              },
            },
            enrollments: {
              create: {
                departmentId: department.id,
                classId: classRecord.id,
                academicYearId: year.id,
                rollNumber: String(globalIndex),
                status: "ACTIVE",
              },
            },
          },
        });

        classStudents.push({
          id: student.id,
          fullName: fullNameEn,
          fatherName: father,
          registrationNumber,
          rollNumber: String(globalIndex),
        });
        studentCount += 1;
      }

      // 6 lectures for this class (local modules + academics timetable)
      const lectures = teachers.map((teacher, index) => ({
        id: crypto.randomUUID(),
        classId: classRecord.id,
        subject: teacher.subject,
        teacherId: teacher.id,
        teacherName: teacher.name,
        createdAt: nowIso,
        updatedAt: nowIso,
        periodHint: index + 1,
      }));

      classes.push({
        id: classRecord.id,
        nameEn: classRecord.nameEn,
        nameUr: classRecord.nameUr ?? "",
        code: classRecord.code,
        studentCount: classStudents.length,
        capacity: studentsPerClass,
        students: classStudents,
        lectures,
      });

      console.log(`  ${meta.code}: ${classStudents.length} students, ${lectures.length} lectures`);
    }

    payload.departments[dept.code] = {
      moduleId: dept.moduleId,
      departmentId: department.id,
      teachers,
      classes,
    };
  }

  // Build localStorage apply payload (academics + teaching modules)
  const academicClasses = [];
  const academicLectures = [];
  const academicEnrollments = [];
  const teachingModules = { hifz: null, kutub: null, school: null };

  for (const dept of DEPARTMENTS) {
    const block = payload.departments[dept.code];
    const moduleClasses = [];
    const moduleLectures = [];

    for (const cls of block.classes) {
      academicClasses.push({
        id: cls.id,
        nameEn: cls.nameEn,
        nameUr: cls.nameUr,
        code: cls.code,
        academicYearId: year.id,
        department: dept.code,
        capacity: cls.capacity,
        isActive: true,
        createdAt: nowIso,
        updatedAt: nowIso,
      });

      for (const lecture of cls.lectures) {
        academicLectures.push({
          id: lecture.id,
          classId: lecture.classId,
          subject: lecture.subject,
          teacherId: lecture.teacherId,
          teacherName: lecture.teacherName,
          createdAt: lecture.createdAt,
          updatedAt: lecture.updatedAt,
        });
        moduleLectures.push({
          id: lecture.id,
          classId: lecture.classId,
          subject: lecture.subject,
          teacherId: lecture.teacherId,
          teacherName: lecture.teacherName,
          createdAt: lecture.createdAt,
          updatedAt: lecture.updatedAt,
        });
      }

      for (const student of cls.students) {
        academicEnrollments.push({
          id: crypto.randomUUID(),
          classId: cls.id,
          academicYearId: year.id,
          studentId: student.id,
          fullName: student.fullName,
          fatherName: student.fatherName,
          registrationNumber: student.registrationNumber,
          enrolledAt: nowIso,
        });
      }

      moduleClasses.push({
        id: cls.id,
        nameEn: cls.nameEn,
        nameUr: cls.nameUr,
        code: cls.code,
        studentCount: cls.studentCount,
        isActive: true,
        createdAt: nowIso,
        updatedAt: nowIso,
      });
    }

    teachingModules[block.moduleId] = {
      classes: moduleClasses,
      lectures: moduleLectures,
    };
  }

  const localStorageData = {
    "dup.db.academicYears": [payload.academicYear],
    "dup.db.classes": academicClasses,
    "dup.db.classLectures": academicLectures,
    "dup.db.enrollments": academicEnrollments,
    "dup.db.academics.seeded": "true",
    "dup.hifz.classes": teachingModules.hifz.classes,
    "dup.hifz.lectures": teachingModules.hifz.lectures,
    "dup.hifz.seeded": "true",
    "dup.kutub.classes": teachingModules.kutub.classes,
    "dup.kutub.lectures": teachingModules.kutub.lectures,
    "dup.kutub.seeded": "true",
    "dup.school.classes": teachingModules.school.classes,
    "dup.school.lectures": teachingModules.school.lectures,
    "dup.school.seeded": "true",
  };

  // Lectures live in frontend localStorage only (no API). Write a public JSON
  // that `hydrateDemoLocalDb()` loads on app boot so lectures appear after refresh.
  const demoLocalVersion = nowIso;
  const publicDemoPath = path.join(frontendRoot, "public", "demo-local-db.json");
  mkdirSync(path.dirname(publicDemoPath), { recursive: true });
  writeFileSync(
    publicDemoPath,
    JSON.stringify(
      {
        version: demoLocalVersion,
        createdAt: nowIso,
        summary: {
          teacherCount,
          studentCount,
          classes: academicClasses.length,
          lectures: academicLectures.length,
        },
        data: localStorageData,
      },
      null,
      2,
    ),
  );

  mkdirSync(outputDir, { recursive: true });
  const jsonPath = path.join(outputDir, "demo-seed.json");
  writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        summary: {
          teacherCount,
          studentCount,
          classes: academicClasses.length,
          lectures: academicLectures.length,
        },
        payload,
        localStorageData,
      },
      null,
      2,
    ),
  );

  const applyPath = path.join(outputDir, "apply-localstorage.js");
  const applySource = `/**
 * Optional fallback: paste into DevTools console if auto-hydrate did not run.
 * Prefer: re-run seed, then hard-refresh the app (loads /demo-local-db.json).
 * Generated: ${nowIso}
 */
(function applyDemoSeedLocalStorage() {
  const data = ${JSON.stringify(localStorageData, null, 2)};
  for (const [key, value] of Object.entries(data)) {
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  }
  localStorage.setItem("dup.demo.localVersion", ${JSON.stringify(demoLocalVersion)});
  console.log("Demo localStorage applied.", {
    keys: Object.keys(data),
    classes: data["dup.db.classes"].length,
    enrollments: data["dup.db.enrollments"].length,
    lectures: data["dup.db.classLectures"].length,
  });
  console.log("Reload the page to see Hifz / Kutub / School / Academics / Attendance updates.");
})();
`;
  writeFileSync(applyPath, applySource);

  console.log("\nDone.");
  console.log(`  Teachers : ${teacherCount}`);
  console.log(`  Students : ${studentCount}`);
  console.log(`  Classes  : ${academicClasses.length} (2 per department)`);
  console.log(`  Lectures : ${academicLectures.length} (6 per class)`);
  console.log(`\nWrote:\n  ${publicDemoPath}\n  ${jsonPath}\n  ${applyPath}`);
  console.log(`
Next steps:
  1. Ensure the backend API is running.
  2. Hard-refresh the frontend (Ctrl+Shift+R). Lectures load automatically from
     /demo-local-db.json on boot (Hifz / Kutub / School / Academics timetable).
  3. Log in and open a class detail page to confirm 6 lectures each.
`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
