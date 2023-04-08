const User = require('../models/User');
const bcrypt = require('bcryptjs');
const createError = require('../utils/error')
const jwt = require('jsonwebtoken');
require('dotenv').config()

// register
const register = async(req, res, next)=>{
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save();
        res.status(200).send("User has been Created")
    } catch (err) {
        next(err)
    }
}

// login
const login = async(req, res, next)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user){
            return next(createError(404, "Invalid Credentials"))
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){
            return next(createError(400, "Invalid Credentials"))
        }

        // creating a token
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.SECRET_KEY)

        const {password, isAdmin, ...otherDetails} = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({...otherDetails})

    } catch (err) {
        next(err)
    }
}

module.exports = {register, login}