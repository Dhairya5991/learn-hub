const router=require("express").Router();
const User=require("../models/User");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

router.post("/register", async(req,res)=>{
  const user=await User.create({...req.body,password:bcrypt.hashSync(req.body.password,8)});
  res.json(user);
});

router.post("/login", async(req,res)=>{
  const user=await User.findOne({email:req.body.email});
  if(!user || !bcrypt.compareSync(req.body.password,user.password))
    return res.status(401).json({msg:"Invalid"});
  res.json({token:jwt.sign({id:user._id},process.env.JWT_SECRET)});
});
module.exports=router;