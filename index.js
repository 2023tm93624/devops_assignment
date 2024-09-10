const express = require('express');
const app = express();

const port = 5000;

app.get('/login', ((req,res)=>{
    res.send("Hello World");
}));

app.listen(port, ()=>{
    console.log(`App is running on ${5000}`);
});