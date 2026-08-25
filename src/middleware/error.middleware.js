const logger = require("../config/logger");

function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
}

function errorHandler(err, req, res, next) {
  logger.error(err.message, { stack: err.stack });

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.isOperational ? err.message : "Internal server error",
    details: err.details || undefined
  });
}

module.exports = { notFound, errorHandler };
