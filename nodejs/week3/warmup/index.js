const express = require("express");
const app = express();
/* 

Going to /calculator/multiply?firstParam=1&secondParam=2 should respond with 2.
Going to /calculator/multiply?firstParam=1&secondParam=2&secondParam=4 should respond with 8.
Going to /calculator/add?firstParam=1&secondParam=2&secondParam=4 should respond with 7.
*/

app.get("/calculator/multiply/", (req, res) =>{
    const numberOfParameters=Object.keys(req.query).length;
    
    const firstNumber=parseInt(req.query.firstParam) > 0 ? parseInt(req.query.firstParam) : 0;
    const secondNumber=parseInt(req.query.secondParam) > 0 ? parseInt(req.query.secondParam) : 0;
    const thirdNumber=parseInt(req.query.thirdParam) > 0 ? parseInt(req.query.thirdParam) : 0;

    //console.log(Object.keys(req.query).length);
    if(numberOfParameters==2)
         res.send('Multiply is '+(firstNumber*secondNumber)); 
   else if(numberOfParameters==3) 
         res.send('Multiply is '+ firstNumber*secondNumber*thirdNumber); 

   
    
}); 

app.get("/calculator/add/", (req, res) =>{
    
    const firstNumber=parseInt(req.query.firstParam) > 0 ? parseInt(req.query.firstParam) : 0;
    const secondNumber=parseInt(req.query.secondParam) > 0 ? parseInt(req.query.secondParam) : 0;

    res.send('Sum is '+(firstNumber+secondNumber));  
    
}); 


app.post("/calculator/multiply/", (req, res) =>{
    const numberOfParameters=Object.keys(req.query).length;
    
    const firstNumber=parseInt(req.query.firstParam) > 0 ? parseInt(req.query.firstParam) : 0;
    const secondNumber=parseInt(req.query.secondParam) > 0 ? parseInt(req.query.secondParam) : 0;
    const thirdNumber=parseInt(req.query.thirdParam) > 0 ? parseInt(req.query.thirdParam) : 0;

    //console.log(Object.keys(req.query).length);
if(numberOfParameters==2)
         res.send('Multiply is '+(firstNumber*secondNumber)); 
else if(numberOfParameters==3) 
         res.send('Multiply is '+firstNumber*secondNumber*thirdNumber); 
    
});


app.post("/calculator/division/", (req, res) =>{
    
    const firstNumber=parseInt(req.query.firstParam) > 0 ? parseInt(req.query.firstParam) : 0;
    const secondNumber=parseInt(req.query.secondParam) > 0 ? parseInt(req.query.secondParam) : 0;
    res.send('Division is '+(firstNumber/secondNumber));     
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));


