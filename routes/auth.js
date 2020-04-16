const {Router} = require('express')
const router = Router()
const check = require('express-validator')

router.post('register',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Min length 6').isLength({ min: 6})
    ], 
    'RegistationController.index')

router.post('login',
    [
        check('email', 'Invalid email').normalizeEmail().isEmail(),
        check('password', 'Invalid password').exists()
    ], 
    'LoginController.index')

module.exports = router