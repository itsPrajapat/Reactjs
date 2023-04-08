const express = require('express');
const connectToMongo = require('./db')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const hotelsRoute = require('./routes/hotels')
const roomsRoute = require('./routes/rooms')
const cookieParser = require('cookie-parser')

const app = express();

// Connecting to database
connectToMongo();

// middlewares
app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

// Error Handling middleware
app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong !";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})


// listening to the port
app.listen(8800, ()=>{
    console.log("Connected to backend!")
})