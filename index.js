const express = require('express');
const router=express.Router();
const fs = require('fs');
// const {create,read,update,delete,postdata,readdata,updatedata,deletedata}= require('./controllers/crud')
router.get("/",(req,res)=>{
    res.render('index',{title:'Home Page'})
})
// router.get("/create",Create);
// router.get("/read",read);
// router.get("/update",update);
// router.get("/delete",Delete);
// router.post("/postdata",postdata)
// router.post("/readdata",readdata);
// router.post("/updatedata",updatedata)
// router.post("/deletedata",deletedata)
module.exports=router;