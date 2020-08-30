const express = require("express");
const userRouter = express.Router();

const userStatesController = require('../controllers/users-states-controller')
const usersController = require("../controllers/users-controller");
const authHelpers = require("../services/auth/auth-helpers");
const covidDataHelpers = require('../services/covid-data-helpers');

//GET /user/new
userRouter.get('/new', (req, res) => {
    res.status(201).json({
        message: "Page Exists",
    })
})

//POST /user/register - User submits a new user profile
userRouter.post('/new', authHelpers.loginRedirect, usersController.create)

//GET /user/profile
userRouter.get('/profile', authHelpers.loginRequired, covidDataHelpers.getStateTotals, userStatesController.index)

//GET /user/edit/:id 
userRouter.get('/profile/:id', authHelpers.loginRequired, usersController.show)

//PUT /user/profile/:id User has submitted an edit of their profile
userRouter.put('/profile/:id', authHelpers.loginRequired, usersController.update)



module.exports = userRouter