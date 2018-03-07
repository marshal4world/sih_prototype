const router=require('express').Router();

router.get('/profile',(req,res)=>{
  res.send('Welcome');
});

router.post('/profile',(req,res)=>{
  res.send("welcome");
});

module.exports=router;
