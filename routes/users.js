const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({message:"Logins"});
});

router.post("/register", (req, res) => {
  res.json({message:"Registers"});
});

module.exports = router;