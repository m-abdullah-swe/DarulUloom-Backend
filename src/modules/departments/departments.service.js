const prisma = require("../../config/prisma");

function list() {
  return prisma.department.findMany({
    where: { isActive: true },
    orderBy: { nameEn: "asc" },
    select: {
      id: true,
      code: true,
      nameEn: true,
      nameUr: true,
      descriptionEn: true,
      descriptionUr: true,
      isActive: true
    }
  });
}

module.exports = { list };
