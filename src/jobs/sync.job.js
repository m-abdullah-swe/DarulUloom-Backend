const cron = require("node-cron");
const env = require("../config/env");
const { processSyncQueue } = require("../services/sync.service");

function startSyncJob() {
  cron.schedule(env.SYNC_CRON, () => processSyncQueue());
}

module.exports = { startSyncJob };
