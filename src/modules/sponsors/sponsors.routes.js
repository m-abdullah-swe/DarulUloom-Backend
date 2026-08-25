const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ success: true, message: "sponsors module initialized" });
});

module.exports = router;
