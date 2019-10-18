const express = require('express'); //import express
const bodyParser = require('body-parser'); // import body-parser
const app = express();


app.use(bodyParser.json()); //call body-parser
app.use((req,res, next)=>{
    res.end(console.log('connected to server'))
})


module.exports = app;