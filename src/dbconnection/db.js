const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/societymaintenance",
    {    useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connection at DataBase is successfully");
    }).catch((err)=>{
        console.log(`connection failed at DataBase${err}`)
    });
