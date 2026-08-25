require("dotenv").config();

const app = require("./src/app");
const env = require("./src/config/env");
const logger = require("./src/config/logger");
const { startBackupJob } = require("./src/jobs/backup.job");
const { startSyncJob } = require("./src/jobs/sync.job");

const server = app.listen(env.PORT, env.HOST, () => {
  logger.info(`Madrassa Management API running on ${env.HOST}:${env.PORT}`);
  startBackupJob();
  startSyncJob();
});

function shutdown(signal) {
  logger.info(`${signal} received. Shutting down gracefully...`);
  server.close(() => process.exit(0));
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (error) => {
  logger.error("Unhandled promise rejection", { error: error.message });
  shutdown("UNHANDLED_REJECTION");
});
