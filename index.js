const express = require('express');
const app = express();

const port = 5000;

app.get('/login', ((req,res)=>{
    res.send("Hello World");
}));


app.get('/signup', ((req,res)=>{
    res.send("Plese signup");
}));

app.get('/home', ((req,res)=>{
    res.send("Welcome to home");
}));

console.log("Temporary change ");

app.listen(port, ()=>{
    console.log(`App is running on ${5000}`);
});