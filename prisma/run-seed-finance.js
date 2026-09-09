const { PrismaClient } = require("@prisma/client");
const { seedFinanceDemoData } = require("./seed-finance");

const prisma = new PrismaClient();
const force = process.argv.includes("--force");

seedFinanceDemoData(prisma, { force })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
