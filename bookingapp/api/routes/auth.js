const express = require('express');
const authFunctons = require('../controllers/auth')
const router = express.Router();

// registration
router.post('/register', authFunctons.register)

// login
router.post('/login', authFunctons.login)

module.exports = router;