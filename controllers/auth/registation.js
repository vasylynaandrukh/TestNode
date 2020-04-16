const bcrypt = required('bcryptjs')
const validationResult = require('express-validator')
const User = require("App/Models/User")

class RegistationController {

    async index({ request, response, auth }) {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()) return response.status(400).json({errors:errors.array(), message: 'Something went wrong'})

            const {email, password} = req.body
            
            const isExists = await User.findBy('email', email)
            if(isExists) return response.status(400).json({message: 'User already exists'})
            
            const hashedPassword = await bcrypt.hash(password, 12)

            const user = await User.create({
                email: input.email,
                password: hashedPassword
            });

            if (!user) return response.status(500).json({ message: 'Something went wrong'})

            return response.status(201).json({message: 'User successfully created'})
            

        } catch (e) {return response.status(500).json({ message: 'Please try again'}) }
    }

}
module.exports = RegistationController