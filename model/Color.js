const mongoose = require('mongoose');
const colorSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:true
    },
    status:{
        type:Boolean,
        required:false,
        default:true
    }
},{timestamps:true});
module.exports = mongoose.model('color', colorSchema);