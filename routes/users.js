const express = require("express");
const router = express.Router();
const USER = require('../model/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY || "furnish_secrte";

router.post("/login", async (req, res) => {
  try {
    const userRecord = await USER.findOne({email:req.body.email});
    if(!userRecord){
       return res.status(401).json({ message: 'Invalid credentials' });
    }
    const payload = { id: userRecord.id, username: userRecord.name };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({status:true,message: 'Login successful', token: token });
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});

router.post("/register", async (req, res) => {
  try {
    const usersData = new USER(req.body);
    const saveUser = await usersData.save();
    res.status(200).json({message:"User created successfuly",result:saveUser});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});

module.exports = router;