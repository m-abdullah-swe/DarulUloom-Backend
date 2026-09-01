const { PrismaClient } = require("@prisma/client");
const { seedFinanceDemoData } = require("./seed-finance");

const prisma = new PrismaClient();

seedFinanceDemoData(prisma)
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
