const router = require("express").Router();
const controller = require("./departments.controller");
const { authenticate } = require("../../middleware/auth.middleware");

router.use(authenticate);

router.get("/", controller.list);

module.exports = router;
