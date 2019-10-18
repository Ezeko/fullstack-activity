const express = require('express'); //import express
const bodyParser = require('body-parser'); // import body-parser
const app = express();

//cross origin resource sharing error prevention below
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json()); //call body-parser
app.use((req,res, next)=>{
    res.end(console.log('connected to server'))
})


module.exports = app;