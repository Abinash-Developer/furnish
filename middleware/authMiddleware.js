const jwt = require('jsonwebtoken');
const secretKey = 'furnish_secrte';
const varifiedUser = async (req,res,next)=>{
   try {
      if(jwt.verify(req.body.token,secretKey)){
         res.json({success:true,message:"You are a valid user",result:jwt.verify(req.body.token,secretKey)});
      }
   } catch (error) {
       res.json({error:error.message});
   }
}
const authuser = async (req,res,next)=>{
   try {
      const token = req.headers.authorization;
      if(jwt.verify(token.split(' ')[1],secretKey)){
        next();
      }
   } catch (error) {
      res.json({error:error.message});
   }
}
module.exports = {varifiedUser,authuser}