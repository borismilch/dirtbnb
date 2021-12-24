const { Router } = require('express')
const { findByEmail } = require('../passport/utils') 

const AuthController = require('../controllers/AuthController')

const router = Router()

router.post('/check', AuthController.checkUser)

router.post('/changeuser', AuthController.updateUser)

module.exports = router

