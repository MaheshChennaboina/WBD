import asyncHandler from 'express-async-handler'
// import generateToken from '../utils/generateTokens.js'
import User from '../models/userModel.js'

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))){
        res.json({
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null,
        })

    } else {
        res.status(401)
        throw new Error('Invalid email or passowrd')
    }

})

export { authUser }