const Hotel = require('../models/Hotel');

// Create Hotel
const createHotel = async (req, res, next)=>{
    
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err);
    }
}

// Update Hotel
const updateHotel = async (req, res, next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
                                                        {$set : req.body},
                                                        {new:true});
        res.status(200).json(updateHotel)
    } catch (err) {
        next(err);
    }
}


// Delete Hotel
const deleteHotel = async (req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        next(err);
    }
}

// Get Hotel
const getHotel =async (req, res, next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        next(err);
    }
}

// Get All Hotels
const getAllHotels = async (req, res, next)=>{
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err);
    }
}




module.exports = {createHotel, updateHotel, deleteHotel, getHotel, getAllHotels};