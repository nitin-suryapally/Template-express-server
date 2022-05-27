
const express = require("express");

const app = express();

app.get("/", function(req , res){
    res.send("welcome to the home page");
})

app.get("/contact", function(req , res){
   res.send("contact me at nitinsuryapally@gmail.com");
})

app.listen("3000" , function(){
    console.log("listning on port 3000");
})
 