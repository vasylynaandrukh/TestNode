const {Router} = require('express')
const router = Router()
//const {check} = require('express-validator')
const LoginController = require('../controllers/auth/login')
const RegistrationController = require('../controllers/auth/registration')

router.post('/register', RegistrationController.index)

router.post('/login', LoginController.index)

module.exports = router