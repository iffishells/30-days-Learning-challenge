const express =  require("express");
const app = express();

app.get("/" , function(req ,res) {
    res.send("Hellow world!");
});

app.get("/contact" ,function (req , res) {
    res.send("contact me iffishells@gmail.com")
    
})
app.get("/about" ,function (req , res) {
    res.send(" My officailly email is  this iffishells@gmail.com")
    
})


app.listen(3000 , function () {
    console.log("server has started at port 3000");
});   // we will listen at 3000 port

