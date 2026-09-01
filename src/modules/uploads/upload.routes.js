const router = require("express").Router();
const controller = require("./upload.controller");
const { authenticate } = require("../../middleware/auth.middleware");
const { uploadSingle } = require("./upload.middleware");

router.use(authenticate);

router.post("/", uploadSingle, controller.create);

module.exports = router;
