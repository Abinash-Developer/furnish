const express = require("express");
const router = express.Router();
const CATEGORY = require('../model/Category');
router.post('/create-category',async(req,res)=>{
   try {
    const categoryCreate = await new CATEGORY(req.body);
    const categorySave = categoryCreate.save();
    res.status(200).json({success:true,message:"category created successfully",result:categorySave});
   } catch (error) {
     res.json({error:error});
   }
})
module.exports = router;