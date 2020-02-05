const express = require("express");
const join = require("path").join;

const router = express.Router();

const home = (req, res) => {
  res.send("This is home!");
};

const about = (req, res) => {
  res.send("This is about!");
};

router.use(express.static(join(__dirname, "../../wwwroot")));
router.get("/", home);
router.get("/about", about);

module.exports = router;
