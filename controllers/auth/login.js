"use strict"
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
//const {validationResult} = require('express-validator')

class LoginController {

    async index(req, res) {
        try{
            // const errors = validationResult(request)
            // if(!errors.isEmpty()) return response.status(400).json({errors:errors.array(), message: 'Something went wrong'})
            
            const {email, password} = req.body
            
            const user = await User.query().findOne({  email: email  })
            if (!user) return res.status(400).json({ message: 'User do not exist'})

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ message: 'Invalid password'})

            const token = jwt.sign(
                { userId: user.id},
                process.env.JWT_SECRET,
                { expiresIn: '1d'}
            )
            return res.json({ token, userId:user.id})
            
                        
        } catch (e) {
            console.error(e);

            return res.status(500).json({
                success: false,
                error: { message: 'Please try again'}
            });
        }
    }

}
module.exports = new LoginController()