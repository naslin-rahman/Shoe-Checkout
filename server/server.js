//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/server", function(req, res){
    res.sendFile("/client/public/index.html");
});

// app.get("/", function(req, res){
//     res.send('hello');
// });

app.post("/server", function(req, res){
    var num1 = Number(req.body.item1);
    var num2 = Number(req.body.item2);
    var num3 = Number(req.body.item3);
    var taxChecked = Boolean(req.body.tax);
    var promoEnabled = String(req.body.promo);
    var subTotal,total;

    subTotal = (num1 *40)+ (num2*30) + (num3*50);
    total = subTotal;
    if (taxChecked){
        total += (subTotal * 0.13);
    }
    if (promoEnabled == "yes"){
        total -= (subTotal * 0.5)
    }
    // else{
    // var total = (num1 *40)+ (num2*30);
        
    // }
    res.send("Thanks! Your total is $" + total);
});



app.listen(3001, function(){
    console.log("server running on 3001");
    // console.log(__dirname);
});