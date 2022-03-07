const express = require('express');
const connectToMongo = require('../database/db');

const app = express();
const port = process.env.PORT || 5000;
connectToMongo();


app.get('/', (req, res) => {
    console.log('This route is working on express server')
    res.send('Welcome to authentication system');
})


app.listen(port, () => {
    console.log('server is started ...', port);
})