const router = require("express").Router();
const controller = require("./classes.controller");
const validate = require("../../middleware/validate.middleware");
const { authenticate } = require("../../middleware/auth.middleware");
const { listClassesSchema } = require("./classes.validation");

router.use(authenticate);

router.get("/", validate(listClassesSchema), controller.list);

module.exports = router;
