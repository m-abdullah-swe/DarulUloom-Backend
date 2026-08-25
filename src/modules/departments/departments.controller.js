const asyncHandler = require("../../utils/asyncHandler");
const service = require("./departments.service");

exports.list = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.list() });
});
