const router = require("express").Router();
const controller = require("./student.controller");
const validate = require("../../middleware/validate.middleware");
const { authenticate } = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/role.middleware");
const audit = require("../../middleware/audit.middleware");
const { createStudentSchema, updateStudentSchema, deleteStudentSchema } = require("./student.validation");

router.use(authenticate);

router.get("/", controller.list);
router.get("/:id", controller.getById);
router.post("/", authorize("SUPER_ADMIN", "ADMIN", "DATA_ENTRY"), validate(createStudentSchema), audit("CREATE", "STUDENT", (_, body) => body?.data?.id), controller.create);
router.patch("/:id", authorize("SUPER_ADMIN", "ADMIN", "DATA_ENTRY"), validate(updateStudentSchema), audit("UPDATE", "STUDENT", req => req.params.id), controller.update);
router.delete("/:id", authorize("SUPER_ADMIN", "ADMIN"), validate(deleteStudentSchema), audit("DELETE", "STUDENT", req => req.params.id), controller.remove);

module.exports = router;
