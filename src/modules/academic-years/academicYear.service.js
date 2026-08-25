const prisma = require("../../config/prisma");

function list() {
  return prisma.academicYear.findMany({
    where: { isActive: true },
    orderBy: [{ isCurrent: "desc" }, { startDate: "desc" }],
    select: {
      id: true,
      name: true,
      startDate: true,
      endDate: true,
      isCurrent: true,
      isActive: true
    }
  });
}

module.exports = { list };
