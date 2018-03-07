const router=require('express').Router();

router.get('/',(req,res)=>{
  res.send('Welcome');
});

router.post('/',(req,res)=>{
  res.send("welcome");
});

module.exports=router;
