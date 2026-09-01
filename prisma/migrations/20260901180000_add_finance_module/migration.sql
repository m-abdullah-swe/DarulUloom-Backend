-- CreateEnum
CREATE TYPE "CashTransactionType" AS ENUM ('IN', 'OUT');

-- CreateEnum
CREATE TYPE "SalaryStatus" AS ENUM ('PAID', 'PENDING');

-- CreateEnum
CREATE TYPE "KhataEntryType" AS ENUM ('DEBIT', 'CREDIT');

-- CreateEnum
CREATE TYPE "SupplyCategory" AS ENUM ('VEGETABLES', 'WOOD', 'CONSTRUCTION');

-- CreateTable
CREATE TABLE "CashTransaction" (
    "id" TEXT NOT NULL,
    "type" "CashTransactionType" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "date" DATE NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reference" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CashTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalaryRecord" (
    "id" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "status" "SalaryStatus" NOT NULL DEFAULT 'PENDING',
    "paidDate" DATE,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SalaryRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KhataEntry" (
    "id" TEXT NOT NULL,
    "partyName" TEXT NOT NULL,
    "type" "KhataEntryType" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KhataEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplyExpense" (
    "id" TEXT NOT NULL,
    "category" "SupplyCategory" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "vendor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupplyExpense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finance_inventory_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "unit" TEXT NOT NULL DEFAULT 'pcs',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "finance_inventory_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finance_sponsors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "monthlyAmount" DECIMAL(12,2) NOT NULL,
    "studentCount" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "finance_sponsors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CashTransaction_date_idx" ON "CashTransaction"("date");

-- CreateIndex
CREATE INDEX "CashTransaction_type_idx" ON "CashTransaction"("type");

-- CreateIndex
CREATE INDEX "SalaryRecord_month_idx" ON "SalaryRecord"("month");

-- CreateIndex
CREATE INDEX "SalaryRecord_status_idx" ON "SalaryRecord"("status");

-- CreateIndex
CREATE INDEX "KhataEntry_date_idx" ON "KhataEntry"("date");

-- CreateIndex
CREATE INDEX "KhataEntry_partyName_idx" ON "KhataEntry"("partyName");

-- CreateIndex
CREATE INDEX "SupplyExpense_date_idx" ON "SupplyExpense"("date");

-- CreateIndex
CREATE INDEX "SupplyExpense_category_idx" ON "SupplyExpense"("category");
