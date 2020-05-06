

const express = require("express");
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended : true}));


app.get("/" ,function (req,res) {
    res.sendFile(__dirname + "/index.html")
});  

app.post("/",function (req , res) {
    var n1 =Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
     console.log(n1);
    
     console.log(n2)
    
    console.log(result);

    res.send( "num1 + num2 "+result);   

});

app.listen(3000 , function (req , res) {

    console.log("server listen at 3000")
    
});