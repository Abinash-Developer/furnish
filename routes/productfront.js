const express = require("express");
const router = express.Router();
const PRODUCTS = require('../model/Products');
const CATEGORY = require('../model/Category');
const COLOR = require('../model/Color');
router.get('/products',async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const [data, totalItems] = await Promise.all([
          PRODUCTS.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
          PRODUCTS.countDocuments()
        ]);
        res.json({
          data,
          currentPage: page,
          totalPages: Math.ceil(totalItems / limit),
          totalItems
        });
      }catch(error){
        res.json({error:error.message});
      }
})

router.get('/get-filtters',async(req,res)=>{
   try{
      const [category,color] = await Promise.all([CATEGORY.find({status:true}),COLOR.find({status:true})]);
       res.json({
        success:true,
        message:"Filtters fteched successfully",
        result:{
            categories:category,
            colors:color
        }
      })
   }catch(error){
    res.json({error:error.message});
   }
})
module.exports = router;