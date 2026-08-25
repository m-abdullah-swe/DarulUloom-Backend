const { PrismaClient, UserRole } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("ChangeMe123!", 12);

  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      fullName: "System Administrator",
      passwordHash,
      role: UserRole.SUPER_ADMIN
    }
  });

  const departments = [
    { code: "SCHOOL", nameEn: "School", nameUr: "اسکول" },
    { code: "HIFZ", nameEn: "Hifz", nameUr: "حفظ" },
    { code: "KUTUB", nameEn: "Kutub", nameUr: "کتب" }
  ];

  for (const department of departments) {
    await prisma.department.upsert({
      where: { code: department.code },
      update: department,
      create: department
    });
  }

  const academicYear = {
    name: "2025-2026",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2026-03-31"),
    isCurrent: true
  };

  await prisma.academicYear.upsert({
    where: { name: academicYear.name },
    update: academicYear,
    create: academicYear
  });

  const prizeCategories = [
    { nameEn: "No Leave", nameUr: "بغیر چھٹی" },
    { nameEn: "Competition Winner", nameUr: "مقابلہ جیتنے والا" },
    { nameEn: "Other Prize", nameUr: "دیگر انعام" }
  ];

  for (const category of prizeCategories) {
    await prisma.prizeCategory.upsert({
      where: { nameEn: category.nameEn },
      update: category,
      create: category
    });
  }

  console.log("Seed completed successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
