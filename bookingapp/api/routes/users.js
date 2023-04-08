const express = require('express');
const router = express.Router();
const userFunctions = require('../controllers/user')
const verify = require('../utils/verifyToken')

// router.get("/checkauthentication", verify.verifyToken, (req, res, next)=>{
//     res.send("Hello User, you are logged in ")
// })

// router.get("/checkuser/:id", verify.verifyUser, (req, res, next)=>{
//     res.send("Hello User, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verify.verifyAdmin, (req, res, next)=>{
//     res.send("Hello Admin, you are logged in and you can delete all accounts")
// })

// Update
router.put('/:id', verify.verifyUser, userFunctions.updateUser)

// Delete
router.delete('/:id', verify.verifyUser, userFunctions.deleteUser)

// Get 
router.get('/:id', verify.verifyUser, userFunctions.getUser)

// Get All
router.get('/', verify.verifyAdmin, userFunctions.getAllUsers)

module.exports = router;