const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const mongoose=require("mongoose");
app.use(express.json());
const url="mongodb+srv://nene:Pandagachesko@11@crud.edjww.mongodb.net/crud?retryWrites=true&w=majority"
mongoose.connect(url,{ useNewUrlParser: true, useFindAndModify:false},()=>console.log("DB is connected"));
const User=require("./models/User");
const config=require("./config");

// Routes
const create=require("./routes/create")
const getUsers=require("./routes/getUsers")
const update=require("./routes/update")
const deleteUser=require("./routes/delete")
// API
app.use("/create",create);
app.use("/getUsers",getUsers);
app.use("/update",update);
app.use("/deleteUser",deleteUser);

app.listen(config.port,()=>{
    console.log("Server is up and running");
})