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
module.exports = {varifiedUser}