var express=require("express")
var app=express();
app.set("view engine","ejs");
app.use(express.static("public"));

var cors=require('cors');
app.use(cors());


var methodoverride=require("method-override");
app.use(methodoverride("_method"));

var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

require('dotenv').config();

var indexroutes=require("./routes/index");
var mainroutes=require("./routes/main");

app.use(indexroutes); 
app.use(mainroutes);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}



//////////////////////////////
app.listen(port,function(){
    console.log("server has been started");
})
