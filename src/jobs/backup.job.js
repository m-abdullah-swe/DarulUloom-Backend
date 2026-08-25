const cron = require("node-cron");
const env = require("../config/env");
const logger = require("../config/logger");
const { runCsvBackup } = require("../services/backup.service");

function startBackupJob() {
  cron.schedule(env.BACKUP_CRON, async () => {
    try {
      const result = await runCsvBackup();
      logger.info("CSV backup completed", { directory: result.directory });
    } catch (error) {
      logger.error("CSV backup failed", { error: error.message });
    }
  });
}

module.exports = { startBackupJob };
