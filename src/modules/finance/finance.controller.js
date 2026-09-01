const asyncHandler = require("../../utils/asyncHandler");
const service = require("./finance.service");

exports.getStore = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.getStore() });
});

exports.getSummary = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.getSummary() });
});

exports.listCash = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.listCashTransactions(req.validated.query) });
});

exports.createCash = asyncHandler(async (req, res) => {
  const data = await service.createCashTransaction(req.validated.body);
  res.status(201).json({ success: true, data });
});

exports.deleteCash = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.deleteCashTransaction(req.params.id) });
});

exports.listSalaries = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.listSalaryRecords(req.validated.query) });
});

exports.createSalary = asyncHandler(async (req, res) => {
  const data = await service.createSalaryRecord(req.validated.body);
  res.status(201).json({ success: true, data });
});

exports.deleteSalary = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.deleteSalaryRecord(req.params.id) });
});

exports.listKhata = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.listKhataEntries() });
});

exports.createKhata = asyncHandler(async (req, res) => {
  const data = await service.createKhataEntry(req.validated.body);
  res.status(201).json({ success: true, data });
});

exports.deleteKhata = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.deleteKhataEntry(req.params.id) });
});

exports.listSupplies = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.listSupplyExpenses(req.validated.query) });
});

exports.createSupply = asyncHandler(async (req, res) => {
  const data = await service.createSupplyExpense(req.validated.body);
  res.status(201).json({ success: true, data });
});

exports.deleteSupply = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.deleteSupplyExpense(req.params.id) });
});

exports.listInventory = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.listInventoryItems() });
});

exports.createInventory = asyncHandler(async (req, res) => {
  const data = await service.createInventoryItem(req.validated.body);
  res.status(201).json({ success: true, data });
});

exports.deleteInventory = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.deleteInventoryItem(req.params.id) });
});

exports.listSponsors = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.listSponsorRecords() });
});

exports.createSponsor = asyncHandler(async (req, res) => {
  const data = await service.createSponsorRecord(req.validated.body);
  res.status(201).json({ success: true, data });
});

exports.deleteSponsor = asyncHandler(async (req, res) => {
  res.json({ success: true, data: await service.deleteSponsorRecord(req.params.id) });
});
