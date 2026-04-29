const express = require("express");
const router = express.Router();
const multer = require('multer');
const PRODUCTS = require('../model/Products');
const {authuser} = require('../middleware/authMiddleware');
const path = require("path");


const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}`
    );
  },
});

const upload = multer({ storage: storage });
router.post('/create-product',authuser,upload.single("image"),async (req,res)=>{
    try{
        const product = new PRODUCTS({
           name:req.body.name,
           description:req.body.description,
           origanal_price:req.body.origanal_price,
           compaire_at_price:req.body.compaire_at_price,
           category_id:req.body.category_id || 0,
           color_id:req.body.color_id || 0,
           image:req.file.filename,
           stock:req.body.stock
        });
        res.json({success:true,message:"product created successfully",result: await product.save()});
    }catch(error){
        re.json({error:error.message})
    }
})
module.exports = router;