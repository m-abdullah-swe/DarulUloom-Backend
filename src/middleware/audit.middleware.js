const prisma = require("../config/prisma");

function audit(action, entityType, getEntityId = () => null) {
  return async (req, res, next) => {
    const originalJson = res.json.bind(res);

    res.json = async (body) => {
      if (res.statusCode < 400 && req.user) {
        try {
          await prisma.auditLog.create({
            data: {
              userId: req.user.id,
              action,
              entityType,
              entityId: getEntityId(req, body),
              ipAddress: req.ip
            }
          });
        } catch (_) {
          // Audit logging must never break the primary request.
        }
      }
      return originalJson(body);
    };

    next();
  };
}

module.exports = audit;
