const express= require('express');
const Joi = require('joi');
const user=require("../model/usermodel");
const validateuser = require('../../validator');
const router=new express.Router();

router.post("/signup",async(req,res)=>{

    console.log('body coming', req.body);
    const data = req.body;
   const result = validateuser(data);
    if(result.error) {
    console.log('response from joi', result.error.details[0].message);
    const errormessage = result.error.details[0].message;
    res.status(404).send(errormessage);
    
    }
  
    try{
        const email=req.body.email;
        const reemail= await user.find({"email":email} );
        console.log('db response', reemail);
        if(reemail.length==0){
               const addmember = new user(req.body);
               const insertmember=  await addmember.save();
               res.status(200).send("you signup successfully");
        }
        else{
            res.send('email is already existed '+email);
        }
    }catch(err){
        res.status(501).send(`something error happend in signup ${err}`)       
    }
});

router.post("/login",async(req,res)=>{
      console.log("login request body is coming",req.body);
      const data=req.body;
    const schemalogin = Joi.object().keys({
          email : Joi.string().email().required(),
          password : Joi.string().required(),
    });
    const result = schemalogin.validate(data);
    if(result.error) {
        console.log('response from joi', result.error.details[0].message);
        const errormessage = result.error.details[0].message;
        res.status(404).send(errormessage);
        }
         try{
    const email=req.body.email;
    const password=req.body.password;
    const resdb=await user.find({"email":email,"password":password } );
    
    console.log("db response",resdb);
    if(resdb.length==0 ){
       res.status(501).send('invalid email and password');
    }
    else{
        res.send('you login successfully');
    }
}
  catch(err){
    res.status(501).send(`something error happend in signup ${err}`)
  }      
})



module.exports=router;
        
