const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/booking?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connectToMongo;