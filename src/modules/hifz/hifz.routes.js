const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ success: true, message: "Hifz module initialized" });
});

module.exports = router;
