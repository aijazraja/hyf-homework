const express = require("express");
const app = express();

//GET /numbers/add?first=<number here>&second=<number here>.
// In response send sum (first + second).

app.get("/numbers/add/", (req, res) =>{
   
    const firstNumber=parseInt(req.query.first) > 0 ? parseInt(req.query.first) : 0;
    const secondNumber=parseInt(req.query.second) > 0 ? parseInt(req.query.second) : 0;

    res.send('Sum is '+(firstNumber+secondNumber));  
    
}); 

// GET /numbers/multiply/<first number here>/<second number here>. 
//in response send multiplication (first * second).

app.get("/numbers/multiply/", (req, res) =>{
    
    const firstNumber=parseInt(req.query.first) > 0 ? parseInt(req.query.first) : 0;
    const secondNumber=parseInt(req.query.second) > 0 ? parseInt(req.query.second) : 0;

    res.send('Multiply is '+(firstNumber*secondNumber));  
    
}); 



app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
