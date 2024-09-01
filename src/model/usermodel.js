const express= require('express');
const mongoose= require('mongoose');
const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{        
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    mobileno:{
        type:Number,
        required:true,
        trim:true
    },
    password:{
        type:Number,
        required:true,
        trim:true
    }
});

const user=new mongoose.model("user", UserSchema);
module.exports=user;