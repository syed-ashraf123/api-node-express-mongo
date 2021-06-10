const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  var data = await User.find({});
  res.send(data);
});

module.exports = router;
