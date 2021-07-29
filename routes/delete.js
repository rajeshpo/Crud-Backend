const router=require("express").Router();
const { findOneAndUpdate } = require("../models/User");
const User=require("../models/User")


router.post("/", async(req,res)=>{

    const user_id={_id:req.body._id};
    
       let deleted=await User.deleteOne(user_id);
       res.status(200).send(req.body);
   })

   module.exports=router;
