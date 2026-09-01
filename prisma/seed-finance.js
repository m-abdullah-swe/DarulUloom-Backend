const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function daysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

function monthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

async function seedFinanceDemoData(client = prisma) {
  const existing = await client.cashTransaction.count();
  if (existing > 0) {
    console.log("Finance demo data already present — skipping");
    return;
  }

  await client.cashTransaction.createMany({
    data: [
      {
        type: "IN",
        amount: 85000,
        date: daysAgo(2),
        category: "Donation",
        description: "Monthly community donation",
        reference: "DN-2401"
      },
      {
        type: "IN",
        amount: 45000,
        date: daysAgo(5),
        category: "Fees",
        description: "Student fee collection"
      },
      {
        type: "OUT",
        amount: 32000,
        date: daysAgo(1),
        category: "Utilities",
        description: "Electricity bill",
        reference: "UT-118"
      },
      {
        type: "OUT",
        amount: 18000,
        date: daysAgo(3),
        category: "Maintenance",
        description: "Classroom repairs"
      }
    ]
  });

  await client.salaryRecord.createMany({
    data: [
      {
        employeeName: "Maulana Ahmad",
        month: monthKey(),
        amount: 35000,
        status: "PAID",
        paidDate: daysAgo(4)
      },
      {
        employeeName: "Hafiz Usman",
        month: monthKey(),
        amount: 28000,
        status: "PENDING",
        notes: "Awaiting board approval"
      }
    ]
  });

  await client.khataEntry.createMany({
    data: [
      {
        partyName: "Al-Rahman Traders",
        type: "CREDIT",
        amount: 12000,
        date: daysAgo(6),
        description: "Groceries on credit"
      },
      {
        partyName: "Al-Rahman Traders",
        type: "DEBIT",
        amount: 5000,
        date: daysAgo(1),
        description: "Partial payment"
      }
    ]
  });

  await client.supplyExpense.createMany({
    data: [
      {
        category: "VEGETABLES",
        amount: 8500,
        date: daysAgo(2),
        description: "Weekly vegetables",
        vendor: "Sabzi Mandi"
      },
      {
        category: "WOOD",
        amount: 15000,
        date: daysAgo(7),
        description: "Firewood for kitchen"
      }
    ]
  });

  await client.financeInventoryItem.createMany({
    data: [
      { name: "Rice (bags)", quantity: 12, unit: "bags", notes: "Store room A" },
      { name: "Cooking oil", quantity: 8, unit: "litres" },
      { name: "Prayer mats", quantity: 45, unit: "pcs" }
    ]
  });

  await client.financeSponsor.createMany({
    data: [
      {
        name: "Abdullah Khan",
        phone: "0300-1234567",
        monthlyAmount: 25000,
        studentCount: 2,
        isActive: true
      },
      {
        name: "Fatima Welfare Trust",
        monthlyAmount: 50000,
        studentCount: 5,
        isActive: true,
        notes: "Quarterly review in March"
      }
    ]
  });

  console.log("Finance demo data seeded");
}

module.exports = { seedFinanceDemoData };
