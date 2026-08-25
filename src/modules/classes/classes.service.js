const prisma = require("../../config/prisma");

function list({ departmentId, academicYearId }) {
  return prisma.class.findMany({
    where: {
      isActive: true,
      ...(departmentId ? { departmentId } : {}),
      ...(academicYearId ? { academicYearId } : {})
    },
    orderBy: [{ department: { nameEn: "asc" } }, { nameEn: "asc" }],
    select: {
      id: true,
      departmentId: true,
      academicYearId: true,
      nameEn: true,
      nameUr: true,
      code: true,
      capacity: true,
      classType: true,
      isActive: true,
      department: { select: { id: true, code: true, nameEn: true, nameUr: true } },
      academicYear: { select: { id: true, name: true, isCurrent: true } }
    }
  });
}

module.exports = { list };
