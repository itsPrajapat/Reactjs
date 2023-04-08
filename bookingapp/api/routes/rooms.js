const express = require('express');
const router = express.Router();
const roomFunctions = require('../controllers/room')
const verify = require('../utils/verifyToken')

// Create
router.post('/:hotelid', verify.verifyAdmin, roomFunctions.createRoom)

// Update
router.put('/:id', verify.verifyAdmin, roomFunctions.updateRoom)

// Delete
router.delete('/:id/:hotelid', verify.verifyAdmin, roomFunctions.deleteRoom)

// Get 
router.get('/:id', roomFunctions.getRoom)

// Get All
router.get('/', roomFunctions.getAllRooms)

module.exports = router;