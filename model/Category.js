const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  status:{
    type:Boolean,
    required:false,
    default:true
  }
},{timestamps:true})
module.exports = mongoose.model('Category', categorySchema);