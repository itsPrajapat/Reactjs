const express = require('express');
const hotelFunctions = require('../controllers/hotel')
const router = express.Router();
const verify = require('../utils/verifyToken')

// Create
router.post('/', verify.verifyAdmin, hotelFunctions.createHotel)

// Update
router.put('/:id', verify.verifyAdmin, hotelFunctions.updateHotel)

// Delete
router.delete('/:id', verify.verifyAdmin, hotelFunctions.deleteHotel)

// Get 
router.get('/:id', hotelFunctions.getHotel)

// Get All
router.get('/', hotelFunctions.getAllHotels)

module.exports = router;