const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");
const env = require("../config/env");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const authenticate = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    throw new ApiError(401, "Authentication token is required");
  }

  const token = header.slice(7);
  const payload = jwt.verify(token, env.JWT_SECRET);

  const user = await prisma.user.findUnique({
    where: { id: payload.id },
    select: { id: true, username: true, fullName: true, role: true, isActive: true }
  });

  if (!user || !user.isActive) {
    throw new ApiError(401, "User is inactive or no longer exists");
  }

  req.user = user;
  next();
});

module.exports = { authenticate };
