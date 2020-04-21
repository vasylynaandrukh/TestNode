const bcrypt = require('bcryptjs')
//const validationResult = require('express-validator')
const User = require('../../models/User')

class RegistrationController {

    async index(req, res) {
        try{
            // const errors = validationResult(req)
            // if(!errors.isEmpty()) return res.status(400).json({errors:errors.array(), message: 'Something went wrong'})

            const {email, password, name,last_name, birthday } = req.body

            const isExists = await User.query().findOne({  email: email  });
            if(isExists) return res.status(400).json({message: 'User already exists'})
            
            const hashedPassword = await bcrypt.hash(password, 12)
            console.log(hashedPassword)

           const user =  await User.query().insert({
                email,
                password: hashedPassword,
                name,
                last_name,
                birthday
            });


           if (!user) return res.status(500).json({ message: 'Something went wrong'})

           return res.status(201).json({message: 'User successfully created'})
            

        } catch (e) {return res.status(500).json({ message: 'Please try again'}) }
    }

}
module.exports = new RegistrationController()