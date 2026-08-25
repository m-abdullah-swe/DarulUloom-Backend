const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ success: true, message: "Kutub module initialized" });
});

module.exports = router;
