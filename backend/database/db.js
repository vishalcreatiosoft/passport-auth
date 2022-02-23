const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:28006/passportDb';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('mongodb is connected..');
    })
}

module.exports = connectToMongo;


