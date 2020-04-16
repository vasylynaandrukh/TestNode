const bcrypt = required('bcryptjs')
const User = require("App/Models/User")
const jwt = require('jsonwebtoken')

class LoginController {

    async index({ request, response, auth }) {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()) return response.status(400).json({errors:errors.array(), message: 'Something went wrong'})

            const {email, password} = req.body

            const user = await User.findBy('email', email)
            if (!user) return response.status(400).json({ message: 'User do not exist'})

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return response.status(400).json({ message: 'Invalid password'})

            const token = jwt.sign(
                { userId: user.id},
                process.env.JWT_SECRET,
                { expiresIn: '1d'}
            )
            return response.json({ token, userId:user.id})
            
                        
        } catch (e) {
            console.error(e);

            return response.status(500).json({
                success: false,
                error: { message: 'Please try again'}
            });
        }
    }

}
module.exports = LoginController