const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const authHelpers = require('../services/auth/auth-helpers')
const usersController = require('../controllers/users-controller')

//POST /auth/register - User submits a new user profile
authRouter.post('/register', usersController.create)

//POST /auth/login - User submits login form
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/auth/verify',
    failureRedirect: '/api/auth/verify',
    failureFlash: true,
}))

//GET /auth/verify - Sending back information based on login success or failure with authRouter.post('/login')
authRouter.get('/verify', (req, res) => {
    if (req.user) return res.status(200).json({
        message: 'ok',
        auth: true,
        data: {
            user: req.user
        }
    }) 
    else return res.status(400).json({
        message: 'Login Failed',
        auth: false,
        data: {
            user: null
        }
    })
})

//GET /auth/logout - Logging Out
authRouter.get('/logout', (req, res) => {
    req.logout()
    res.json({
        message: 'Logout Successful',
        auth: false,
        data: {
            user: null
        }
    })
})

module.exports = authRouter