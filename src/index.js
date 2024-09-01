const express = require('express');
const router = require('./router/auth');
const Userrouter = require('./router/users');
require("./dbconnection/db");
const app=express();
const port = 9000;


app.use(express.json());

app.listen(port,()=>{
    console.log(`connection live at port${port}`);
});

app.use(router);
app.use(Userrouter);