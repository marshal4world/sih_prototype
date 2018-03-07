const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dbRoutes = require('./routes/db-routes');
const path= require('path');

var app=express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');


var port=process.env.PORT||3000;



app.get('/',(req,res)=>{
  res.render('index');
});

app.listen(port,process.env.IP,()=>{
  console.log(`Starting at port ${port}`);
});
