const express = require("express");
const router = express.Router();
const CATEGORY = require('../model/Category');
const {authuser} = require('../middleware/authMiddleware');
router.post('/create-category',authuser,async(req,res)=>{
   try {
    const categoryCreate = new CATEGORY(req.body);
    const categorySave = await categoryCreate.save();
    res.status(200).json({success:true,message:"category created successfully",result:categorySave});
   } catch (error) {
     res.json({error:error});
   }
})
module.exports = router;