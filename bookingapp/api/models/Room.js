const mongoose = require('mongoose');
const {Schema} = mongoose;

const RoomSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    maxPeople:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    roomNumbers: [{ number:Number, unavailableDates:[{type:Date}] }]
},
{timestamps:true}
);

// Creating a model of the schema
const Room = mongoose.model('room', RoomSchema)

module.exports = Room;