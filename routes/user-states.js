const express = require('express');
const userStatesRouter = express.Router();

const userStatesController = require('../controllers/users-states-controller');
// const authHelpers = require('../services/auth-helpers');

userStatesRouter.get('/profile', userStatesController.index);

userStatesRouter.post('/:id([a-z][a-z])', userStatesController.create);

userStatesRouter.delete('/:id([0-9]+)', userStatesController.destroy);


module.exports = userStatesRouter;