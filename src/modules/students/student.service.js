const fs = require("fs/promises");
const path = require("path");
const prisma = require("../../config/prisma");
const ApiError = require("../../utils/ApiError");
const { getPagination } = require("../../utils/pagination");
const { UPLOAD_ROOT } = require("../uploads/upload.middleware");

const UPLOAD_URL_PREFIX = "/uploads/";
const UPLOAD_BASE = path.resolve(UPLOAD_ROOT);

function splitStudentPayload(data) {
  const { guardians, admission, documents, ...student } = data;
  return { student, guardians, admission, documents };
}

async function create(data) {
  const { student, guardians = [], admission, documents = [] } = splitStudentPayload(data);

  return prisma.$transaction(async (tx) => {
    const created = await tx.student.create({ data: student });

    if (guardians.length) {
      await tx.guardian.createMany({
        data: guardians.map((guardian) => ({
          ...guardian,
          studentId: created.id
        }))
      });
    }

    await tx.studentAdmission.create({
      data: {
        ...admission,
        studentId: created.id
      }
    });

    if (documents.length) {
      await tx.studentDocument.createMany({
        data: documents.map((document) => ({
          ...document,
          studentId: created.id
        }))
      });
    }

    return tx.student.findUnique({
      where: { id: created.id },
      include: {
        guardians: true,
        admissions: {
          include: {
            department: true,
            class: true,
            academicYear: true
          }
        },
        documents: true
      }
    });
  });
}

async function list(query) {
  const { page, limit, skip } = getPagination(query);
  const search = query.search?.trim();

  const where = search ? {
    OR: [
      { registrationNumber: { contains: search, mode: "insensitive" } },
      { fullNameEn: { contains: search, mode: "insensitive" } },
      { fullNameUr: { contains: search } },
      { fatherNameEn: { contains: search, mode: "insensitive" } },
      { fatherNameUr: { contains: search } },
      { admissions: { some: { admissionNumber: { contains: search, mode: "insensitive" } } } }
    ]
  } : {};

  const [data, total] = await Promise.all([
    prisma.student.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        admissions: {
          where: { status: "ACTIVE" },
          include: { department: true, class: true, academicYear: true }
        }
      }
    }),
    prisma.student.count({ where })
  ]);

  return { data, total, page, limit };
}

async function getById(id) {
  const student = await prisma.student.findUnique({
    where: { id },
    include: {
      guardians: true,
      admissions: {
        include: {
          department: true,
          class: true,
          academicYear: true
        },
        orderBy: { createdAt: "desc" }
      },
      documents: true,
      enrollments: {
        include: {
          department: true,
          class: true,
          academicYear: true
        }
      },
      statusHistory: { orderBy: { effectiveDate: "desc" } }
    }
  });

  if (!student) throw new ApiError(404, "Student not found");
  return student;
}

async function update(id, data) {
  const existing = await getById(id);
  const { student, guardians, documents } = splitStudentPayload(data);

  return prisma.$transaction(async (tx) => {
    const updated = await tx.student.update({
      where: { id },
      data: student
    });

    if (guardians) {
      await tx.guardian.deleteMany({ where: { studentId: id } });
      if (guardians.length) {
        await tx.guardian.createMany({
          data: guardians.map((guardian) => ({ ...guardian, studentId: id }))
        });
      }
    }

    if (documents) {
      await tx.studentDocument.deleteMany({ where: { studentId: id } });
      if (documents.length) {
        await tx.studentDocument.createMany({
          data: documents.map((document) => ({ ...document, studentId: id }))
        });
      }
    }

    return tx.student.findUnique({
      where: { id: updated.id },
      include: {
        guardians: true,
        admissions: {
          include: { department: true, class: true, academicYear: true }
        },
        documents: true
      }
    });
  });
}

async function removeLocalUpload(fileUrl) {
  if (typeof fileUrl !== "string" || !fileUrl.startsWith(UPLOAD_URL_PREFIX)) return;

  const target = path.resolve(UPLOAD_BASE, fileUrl.slice(UPLOAD_URL_PREFIX.length));
  if (!target.startsWith(UPLOAD_BASE + path.sep)) return;

  await fs.unlink(target).catch(() => {});
}

async function remove(id) {
  const existing = await prisma.student.findUnique({
    where: { id },
    select: { id: true, photoUrl: true }
  });

  if (!existing) throw new ApiError(404, "Student not found");

  await prisma.$transaction(async (tx) => {
    // These relations are ON DELETE RESTRICT, so their rows have to go first.
    await tx.attendanceRecord.deleteMany({ where: { studentId: id } });
    await tx.studentPrize.deleteMany({ where: { studentId: id } });
    await tx.sponsorship.deleteMany({ where: { studentId: id } });
    await tx.boardApplication.deleteMany({ where: { studentId: id } });
    await tx.studentEnrollment.deleteMany({ where: { studentId: id } });

    // A visit is a gate log of who came to the madrassa, so it outlives the student.
    await tx.visit.updateMany({ where: { studentId: id }, data: { studentId: null } });

    // Guardian, StudentAdmission, StudentDocument, StudentStatusHistory and
    // HifzDailyReport cascade from this delete.
    await tx.student.delete({ where: { id } });
  });

  await removeLocalUpload(existing.photoUrl);

  return { id: existing.id };
}

module.exports = { create, list, getById, update, remove };
