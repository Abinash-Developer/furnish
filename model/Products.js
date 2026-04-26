const mongoose  = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    origanal_price:{
        required:true,
        type:mongoose.Schema.Types.Decimal128
    },
    compaire_at_price:{
        required:true,
        type:mongoose.Schema.Types.Decimal128
    },
    category_id:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'Category'   
    },
    color_id:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'color' 
    },
    image:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:false,
        default:0
    }
},{timestamps:true});
module.exports = mongoose.model('Product', productSchema);