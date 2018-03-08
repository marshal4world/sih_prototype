const router=require('express').Router();
const river = require('../models/river-model');
const mongoose = require('../databases/mongoose');

router.get('/',(req,res)=>{
  river.find().then((doc)=>{
    console.log(doc);
  },(err)=>{
    console.log(err);
  })
});

router.post('/',(req,res)=>{
  console.log(req.body);
  var river_obj=new river({
    name:req.body.name,
    quantity:req.body.quantity,
    tou:req.body.tou

});
river_obj.save().then((doc)=>{
  console.log(doc);
},(err)=>{
  console.log(err);
});
});

module.exports=router;
