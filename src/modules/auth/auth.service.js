const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../../config/prisma");
const env = require("../../config/env");
const ApiError = require("../../utils/ApiError");

async function login({ username, password }) {
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || !user.isActive) {
    throw new ApiError(401, "Invalid username or password");
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new ApiError(401, "Invalid username or password");

  const token = jwt.sign({ id: user.id, role: user.role }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { lastLogin: new Date() }
  });

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      role: user.role
    }
  };
}

module.exports = { login };
