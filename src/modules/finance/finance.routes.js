const router = require("express").Router();
const controller = require("./finance.controller");
const validate = require("../../middleware/validate.middleware");
const { authenticate } = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/role.middleware");
const audit = require("../../middleware/audit.middleware");
const {
  listCashSchema,
  createCashSchema,
  listSalarySchema,
  createSalarySchema,
  listKhataSchema,
  createKhataSchema,
  listSupplySchema,
  createSupplySchema,
  listInventorySchema,
  createInventorySchema,
  listSponsorSchema,
  createSponsorSchema,
  financeIdSchema
} = require("./finance.validation");

router.use(authenticate);

const writeRoles = authorize("SUPER_ADMIN", "ADMIN", "DATA_ENTRY");
const deleteRoles = authorize("SUPER_ADMIN", "ADMIN");

router.get("/summary", controller.getSummary);
router.get("/store", controller.getStore);

router.get("/cash-transactions", validate(listCashSchema), controller.listCash);
router.post(
  "/cash-transactions",
  writeRoles,
  validate(createCashSchema),
  audit("CREATE", "CASH_TRANSACTION", (_, body) => body?.data?.id),
  controller.createCash
);
router.delete(
  "/cash-transactions/:id",
  deleteRoles,
  validate(financeIdSchema),
  audit("DELETE", "CASH_TRANSACTION", (req) => req.params.id),
  controller.deleteCash
);

router.get("/salaries", validate(listSalarySchema), controller.listSalaries);
router.post(
  "/salaries",
  writeRoles,
  validate(createSalarySchema),
  audit("CREATE", "SALARY_RECORD", (_, body) => body?.data?.id),
  controller.createSalary
);
router.delete(
  "/salaries/:id",
  deleteRoles,
  validate(financeIdSchema),
  audit("DELETE", "SALARY_RECORD", (req) => req.params.id),
  controller.deleteSalary
);

router.get("/khata-entries", validate(listKhataSchema), controller.listKhata);
router.post(
  "/khata-entries",
  writeRoles,
  validate(createKhataSchema),
  audit("CREATE", "KHATA_ENTRY", (_, body) => body?.data?.id),
  controller.createKhata
);
router.delete(
  "/khata-entries/:id",
  deleteRoles,
  validate(financeIdSchema),
  audit("DELETE", "KHATA_ENTRY", (req) => req.params.id),
  controller.deleteKhata
);

router.get("/supply-expenses", validate(listSupplySchema), controller.listSupplies);
router.post(
  "/supply-expenses",
  writeRoles,
  validate(createSupplySchema),
  audit("CREATE", "SUPPLY_EXPENSE", (_, body) => body?.data?.id),
  controller.createSupply
);
router.delete(
  "/supply-expenses/:id",
  deleteRoles,
  validate(financeIdSchema),
  audit("DELETE", "SUPPLY_EXPENSE", (req) => req.params.id),
  controller.deleteSupply
);

router.get("/inventory-items", validate(listInventorySchema), controller.listInventory);
router.post(
  "/inventory-items",
  writeRoles,
  validate(createInventorySchema),
  audit("CREATE", "FINANCE_INVENTORY", (_, body) => body?.data?.id),
  controller.createInventory
);
router.delete(
  "/inventory-items/:id",
  deleteRoles,
  validate(financeIdSchema),
  audit("DELETE", "FINANCE_INVENTORY", (req) => req.params.id),
  controller.deleteInventory
);

router.get("/sponsors", validate(listSponsorSchema), controller.listSponsors);
router.post(
  "/sponsors",
  writeRoles,
  validate(createSponsorSchema),
  audit("CREATE", "FINANCE_SPONSOR", (_, body) => body?.data?.id),
  controller.createSponsor
);
router.delete(
  "/sponsors/:id",
  deleteRoles,
  validate(financeIdSchema),
  audit("DELETE", "FINANCE_SPONSOR", (req) => req.params.id),
  controller.deleteSponsor
);

module.exports = router;
