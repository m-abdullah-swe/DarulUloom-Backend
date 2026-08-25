const prisma = require("../config/prisma");
const env = require("../config/env");
const logger = require("../config/logger");

async function processSyncQueue() {
  if (!env.CLOUD_API_URL) return { skipped: true, reason: "CLOUD_API_URL is not configured" };

  const pending = await prisma.syncQueue.findMany({
    where: { status: "PENDING" },
    orderBy: { createdAt: "asc" },
    take: 100
  });

  for (const item of pending) {
    try {
      // Cloud transport is intentionally isolated here.
      // Add fetch/HTTP client and authenticated cloud endpoint in the next sync phase.
      await prisma.syncQueue.update({
        where: { id: item.id },
        data: { retryCount: { increment: 1 }, lastError: "Cloud sync endpoint not implemented" }
      });
    } catch (error) {
      logger.error("Sync failed", { id: item.id, error: error.message });
    }
  }

  return { processed: pending.length };
}

module.exports = { processSyncQueue };
