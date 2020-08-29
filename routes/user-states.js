const express = require('express');
const userStatesRouter = express.Router();

const userStatesController = require('../controllers/users-states-controller');
const covidDataHelpers = require('../services/covid-data-helpers');

// const authHelpers = require('../services/auth/auth-helpers');



userStatesRouter.post('/:id([a-z][a-z])', userStatesController.create);

userStatesRouter.delete('/:id([0-9]+)', userStatesController.destroy);


module.exports = userStatesRouter;