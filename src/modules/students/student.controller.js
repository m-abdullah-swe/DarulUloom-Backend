const asyncHandler = require("../../utils/asyncHandler");
const { paginatedResponse } = require("../../utils/pagination");
const service = require("./student.service");

exports.create = asyncHandler(async (req, res) => {
  const student = await service.create(req.validated.body);
  res.status(201).json({ success: true, data: student });
});

exports.list = asyncHandler(async (req, res) => {
  const result = await service.list(req.query);
  res.json(paginatedResponse(result.data, result.total, result.page, result.limit));
});

exports.getById = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.getById(req.params.id) });
});

exports.update = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.update(req.params.id, req.validated.body) });
});

exports.remove = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.remove(req.params.id) });
});
