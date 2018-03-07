const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dbRoutes = require('./routes/db-routes');

var app=express();
var port=3000||process.env.PORT;



app.use(dbRoutes);

app.listen(port, () => {
    console.log('app now listening for requests on port 3000');
});
