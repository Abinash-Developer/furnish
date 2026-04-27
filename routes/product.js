const express = require("express");
const router = express.Router();
const PRODUCTS = require('../model/Products');
const {authuser} = require('../middleware/authMiddleware');
router.post('/create-product',authuser,async (req,res)=>{
    try{
      
    }catch(error){
        re.json({error:error.message})
    }
})
module.exports = router;