//import our dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

//intialize the app and setup dotenv
const app = express()
require('dotenv').config()

//Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))

//Set the port to listen
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//ROUTES SETUP

//Root Route
app.get('/', (req, res) => {
    res.send('Hello World!  Welcome To Our Covid-19 Tracker')
})


const authRoutes = require('./routes/auth-routes')
app.use('/api/auth', authRoutes)
<<<<<<< HEAD
const stateRoutes = require('./routes/user-states')
app.use('/api/stats', stateRoutes)
const userRoutes = require('./routes/user-routes')
app.use('/api/user', userRoutes)
=======
// const stateRoutes = require('./routes/state-routes')
// app.use('/api/stats', stateRoutes)
const userStatesRouter = require('./routes/user-states');
app.use('/user/stats', userStatesRouter);
>>>>>>> aee5d145e5ea26515813a4a6fe4e8cfcfc99ee1f

//Error handlers
app.use('*', (req, res) => {
    res.status(400).json({
        message: 'Not Found!!!'
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: err,
        message: err.message
    })
}) 