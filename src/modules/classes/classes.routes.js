const router = require("express").Router();
const controller = require("./classes.controller");
const validate = require("../../middleware/validate.middleware");
const { authenticate } = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/role.middleware");
const audit = require("../../middleware/audit.middleware");
const {
  listClassesSchema,
  createClassSchema,
  updateClassSchema,
  deleteClassSchema
} = require("./classes.validation");

router.use(authenticate);

router.get("/", validate(listClassesSchema), controller.list);
router.post(
  "/",
  authorize("SUPER_ADMIN", "ADMIN", "DATA_ENTRY"),
  validate(createClassSchema),
  audit("CREATE", "CLASS", (_, body) => body?.data?.id),
  controller.create
);
router.patch(
  "/:id",
  authorize("SUPER_ADMIN", "ADMIN", "DATA_ENTRY"),
  validate(updateClassSchema),
  audit("UPDATE", "CLASS", (req) => req.params.id),
  controller.update
);
router.delete(
  "/:id",
  authorize("SUPER_ADMIN", "ADMIN"),
  validate(deleteClassSchema),
  audit("DELETE", "CLASS", (req) => req.params.id),
  controller.remove
);

module.exports = router;
