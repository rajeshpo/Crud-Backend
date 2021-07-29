const router=require("express").Router();
const { findOneAndUpdate } = require("../models/User");
const User=require("../models/User")


router.post("/", async(req,res)=>{

    const user_id={_id:req.body._id};
    const update={
     name:req.body.name,
     age:req.body.age,
     city:req.body.city,
     country:req.body.country,
     sex:req.body.sex
       };
       let updated=await User.findOneAndUpdate(user_id,update);
       res.status(200).send(req.body);
   })

   module.exports=router;
