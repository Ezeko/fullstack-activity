const express = require('express'); //import express
const bodyParser = require('body-parser'); // import body-parser
const mongoose = require('mongoose');
const app = express();

//connect to Atlas
mongoose.connect('mongodb+srv://Ezeko:roJvlMY8Lqep3SxB@cluster0-rlzyx.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log('connected to mongodb atlas successfully!');
    }).catch((error)=>{
        console.log({
            error: error
        });
    });

//cross origin resource sharing error prevention below
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json()); //call body-parser



app.use('/api/recipes',(req,res, next)=>{
    res.end(console.log('connected to server'))
})


module.exports = app;