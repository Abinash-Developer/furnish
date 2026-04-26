const express = require("express");
const router = express.Router();
const COLOR = require('../model/Color');
const {authuser} = require('../middleware/authMiddleware')
router.post('/create-color',authuser,async (req,res)=>{
    try{
      const colorObj = new COLOR(req.body);
      const colorRes = await colorObj.save();
      res.json({success:true,message:"color created successfully",result:colorRes});
    }catch(error){
     res.json({error:error.message});
    }
})
module.exports = router;