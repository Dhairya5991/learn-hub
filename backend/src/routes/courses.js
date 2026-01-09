const router=require("express").Router();
const Course=require("../models/Course");

router.get("/", async(req,res)=>res.json(await Course.find()));
router.post("/", async(req,res)=>res.json(await Course.create(req.body)));

module.exports=router;