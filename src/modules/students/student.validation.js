const { z } = require("zod");

const nullableString = z.string().trim().min(1).optional().nullable();
const nullableDate = z.coerce.date().optional().nullable();

const guardianSchema = z.object({
  nameEn: nullableString,
  nameUr: nullableString,
  relationshipEn: nullableString,
  relationshipUr: nullableString,
  phonePrimary: nullableString,
  phoneSecondary: nullableString,
  cnic: nullableString,
  occupation: nullableString,
  address: nullableString,
  isPrimary: z.boolean().optional()
});

const admissionSchema = z.object({
  admissionNumber: z.string().trim().min(1),
  registrationNumber: nullableString,
  admissionDate: z.coerce.date(),
  academicYearId: z.string().uuid(),
  departmentId: z.string().uuid(),
  classId: z.string().uuid().optional().nullable(),
  previousInstitution: nullableString,
  previousClass: nullableString,
  previousEducationDetails: nullableString,
  remarks: nullableString
});

const documentSchema = z.object({
  type: z.enum([
    "STUDENT_PHOTO",
    "B_FORM",
    "CNIC",
    "BIRTH_CERTIFICATE",
    "PREVIOUS_CERTIFICATE",
    "OTHER"
  ]),
  fileName: z.string().min(1),
  fileUrl: z.string().min(1),
  mimeType: nullableString,
  fileSize: z.number().int().nonnegative().optional().nullable()
});

const studentFields = z.object({
  registrationNumber: nullableString,

  fullNameEn: nullableString,
  fullNameUr: nullableString,
  fatherNameEn: nullableString,
  fatherNameUr: nullableString,

  dateOfBirth: nullableDate,
  gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional().nullable(),

  nationality: nullableString,
  religion: nullableString,

  bFormNumber: nullableString,
  cnicNumber: nullableString,

  phonePrimary: nullableString,
  phoneSecondary: nullableString,
  phoneEmergency: nullableString,
  email: z.string().email().optional().nullable(),

  permanentAddress: nullableString,
  currentAddress: nullableString,
  city: nullableString,
  district: nullableString,

  photoUrl: nullableString,

  guardians: z.array(guardianSchema).max(10).optional(),
  admission: admissionSchema.optional(),
  documents: z.array(documentSchema).max(20).optional()
});

const withStudentNameRules = (schema) => schema.refine(
  (data) => Boolean(data.fullNameEn || data.fullNameUr),
  { message: "At least one student name is required", path: ["fullNameEn"] }
).refine(
  (data) => Boolean(data.fatherNameEn || data.fatherNameUr),
  { message: "At least one father name is required", path: ["fatherNameEn"] }
);

const studentBody = withStudentNameRules(studentFields);

const createStudentSchema = z.object({
  body: withStudentNameRules(studentFields.extend({ admission: admissionSchema })),
  query: z.object({}),
  params: z.object({})
});

const updateStudentSchema = z.object({
  body: withStudentNameRules(studentFields.partial()),
  query: z.object({}),
  params: z.object({ id: z.string().uuid() })
});

const deleteStudentSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({ id: z.string().uuid() })
});

module.exports = { createStudentSchema, updateStudentSchema, deleteStudentSchema };
