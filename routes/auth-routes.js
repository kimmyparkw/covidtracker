const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/users-controller')



//POST /auth/login - User submits login form.
//Passport authenticates the user for us based on the 'local' strategy in services/auth/local.js
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/auth/login',
    failureRedirect: '/auth/login',
    failureFlash: true,
}))

//GET /auth/verify - Sending back information based on login success or failure with authRouter.post('/login')
authRouter.get('/login', (req, res) => {
    if (req.user) return res.status(200).json({
        message: 'User Verified',
        auth: true,
        data: {
            user: req.user
        }
    }) 
    else return res.status(400).json({
        message: 'Login Failed - incorrect password or username',
        auth: false,
        data: {
            user: null
        }
    })
})

//GET /auth/logout - Logging Out
authRouter.get('/logout', (req, res) => {
    req.logout();
    res.json({
        message: 'Logged Out',
        auth: false,
        data: {
            user: null
        }
    })
})

module.exports = authRouter