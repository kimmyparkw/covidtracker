const express = require('express');
const userStatesRouter = express.Router();

const userStatesController = require('../controllers/users-states-controller');
const covidDataHelpers = require('../services/covid-data-helpers');

const authHelpers = require('../services/auth/auth-helpers');



userStatesRouter.post('/:id([a-z][a-z])', authHelpers.loginRequired, userStatesController.create);

userStatesRouter.delete('/:user_id([0-9]+)/:id([a-z][a-z])', authHelpers.loginRequired, userStatesController.destroy);


module.exports = userStatesRouter;