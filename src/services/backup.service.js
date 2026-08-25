const path = require("path");
const prisma = require("../config/prisma");
const env = require("../config/env");
const { exportCsv } = require("./csv.service");

async function runCsvBackup() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const directory = path.resolve(env.BACKUP_DIR, stamp);

  const tables = {
    students: () => prisma.student.findMany(),
    student_admissions: () => prisma.studentAdmission.findMany(),
    guardians: () => prisma.guardian.findMany(),
    student_documents: () => prisma.studentDocument.findMany(),
    teachers: () => prisma.teacher.findMany(),
    departments: () => prisma.department.findMany(),
    academic_years: () => prisma.academicYear.findMany(),
    classes: () => prisma.class.findMany(),
    attendance_records: () => prisma.attendanceRecord.findMany(),
    hifz_daily_reports: () => prisma.hifzDailyReport.findMany(),
    visits: () => prisma.visit.findMany(),
    sponsors: () => prisma.sponsor.findMany(),
    sponsorships: () => prisma.sponsorship.findMany(),
    inventory_items: () => prisma.inventoryItem.findMany(),
    inventory_transactions: () => prisma.inventoryTransaction.findMany(),
    board_applications: () => prisma.boardApplication.findMany()
  };

  const exported = [];
  for (const [name, loader] of Object.entries(tables)) {
    const rows = await loader();
    exported.push(await exportCsv(directory, `${name}.csv`, rows));
  }

  await prisma.backupLog.create({
    data: { type: "CSV", location: directory, status: "SUCCESS" }
  });

  return { directory, exported };
}

module.exports = { runCsvBackup };
