const prisma = require("../../config/prisma");
const { getPagination } = require("../../utils/pagination");

const userSelect = {
  id: true,
  username: true,
  fullName: true,
  role: true,
};

async function list(query) {
  const { page, limit, skip } = getPagination(query);
  const search = query.search?.trim();

  const where = {
    ...(query.action ? { action: query.action } : {}),
    ...(query.entityType ? { entityType: query.entityType } : {}),
    ...(query.from || query.to
      ? {
          createdAt: {
            ...(query.from ? { gte: query.from } : {}),
            ...(query.to ? { lte: query.to } : {}),
          },
        }
      : {}),
    ...(search
      ? {
          OR: [
            { action: { contains: search, mode: "insensitive" } },
            { entityType: { contains: search, mode: "insensitive" } },
            { entityId: { contains: search, mode: "insensitive" } },
            { ipAddress: { contains: search, mode: "insensitive" } },
            { user: { fullName: { contains: search, mode: "insensitive" } } },
            { user: { username: { contains: search, mode: "insensitive" } } },
          ],
        }
      : {}),
  };

  const [data, total] = await Promise.all([
    prisma.auditLog.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: { user: { select: userSelect } },
    }),
    prisma.auditLog.count({ where }),
  ]);

  return { data, total, page, limit };
}

async function stats() {
  const [total, creates, updates, deletes] = await Promise.all([
    prisma.auditLog.count(),
    prisma.auditLog.count({ where: { action: "CREATE" } }),
    prisma.auditLog.count({ where: { action: "UPDATE" } }),
    prisma.auditLog.count({ where: { action: "DELETE" } }),
  ]);

  return { total, creates, updates, deletes };
}

module.exports = { list, stats };
