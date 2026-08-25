const router = require("express").Router();
const controller = require("./auth.controller");
const validate = require("../../middleware/validate.middleware");
const { authenticate } = require("../../middleware/auth.middleware");
const { loginSchema } = require("./auth.validation");

router.post("/login", validate(loginSchema), controller.login);
router.get("/me", authenticate, controller.me);

module.exports = router;
