const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, 
{timestamps: true}
);

// Creating a model of the schema
const User = mongoose.model('user', UserSchema)

module.exports = User;