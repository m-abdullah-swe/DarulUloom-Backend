const fs = require("fs/promises");
const path = require("path");
const { stringify } = require("csv-stringify/sync");

async function exportCsv(directory, filename, rows) {
  await fs.mkdir(directory, { recursive: true });
  const csv = stringify(rows, { header: true });
  const filePath = path.join(directory, filename);
  await fs.writeFile(filePath, csv);
  return filePath;
}

module.exports = { exportCsv };
