const asyncHandler = require("../../utils/asyncHandler");
const service = require("./academicYear.service");

exports.list = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.list() });
});
