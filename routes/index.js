var express=require("express");
var passport=require("passport");
var url=require("url");
require('dotenv').config();

var router=express.Router({mergeParams: true});

router.get("/",function(req,res){
    res.render("mySchool/landingPage");
    
})

module.exports = router;