const express = require('express');
const bodyparser = require('body-parser');
const dbRoutes = require('./routes/db-routes');
const path= require('path');



var app=express();

app.use(bodyparser.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');
app.use(dbRoutes);

var port=process.env.PORT||3000;


app.listen(port,process.env.IP,()=>{
  console.log(`Starting at port ${port}`);
});
