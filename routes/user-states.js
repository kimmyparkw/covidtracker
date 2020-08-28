const express = require('express');
const userStatesRouter = express.Router();

const userStatesController = require('../controllers/users-states-controller');
// const authHelpers = require('../services/auth-helpers');

// userStatesRouter.get('/profile', authHelpers.loginRequired, usersController.index);

userStatesRouter.post('/:id([0-9]+)', userStatesController.create);

userStatesRouter.delete('/:id([0-9]+)', userStatesController.destroy);


module.export = userStatesRouter;