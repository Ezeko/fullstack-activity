const express = require('express'); //import express

const app = express();

app.use((req,res, next)=>{
    res.end(console.log('connected to server'))
})


module.exports = app;