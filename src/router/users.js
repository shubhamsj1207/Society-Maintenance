const express= require('express');
const user=require("../model/usermodel");
const Userrouter=new express.Router();

Userrouter.get("/showUsers",async(req,res)=>{
    try {
    const getdata= await user.find({});
    res.send(getdata);
    console.log(getdata);
    
    } catch (err) 
    {
        res.status(400).send(err);
    }
});

module.exports=Userrouter;