const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dbRoutes = require('./routes/db-routes');
const path= require('path');

var app=express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');


var port=3000||process.env.PORT;



app.get('/',(req,res)=>{
  res.render('index');
});

app.listen(port, () => {
    console.log('app now listening for requests on port 3000');
});
