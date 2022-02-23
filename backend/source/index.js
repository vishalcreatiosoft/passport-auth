const express = require('express');
const connectToMongo = require('../database/db');

const app = express();
const port = process.env.PORT || 5000;
connectToMongo();


app.get('/',(req, res)=>{
    res.send('Welcome to passport.js');
})


app.listen(port, ()=>{
    console.log('server is started ...',port);
})