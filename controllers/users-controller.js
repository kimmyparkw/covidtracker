const bcrypt = require('bcryptjs')
const User = require('../models/User')

const usersController = {
  //NEW USER CREATION
  create(req, res, next) {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req.body.password, salt)
    new User({
      username: req.body.username,
      email: req.body.email,
      password_digest: hash,
    }).save().then(user => {
      req.login(user, (err) => {
        if (err) return next(err)
        res.status(201).json({
          message: 'User Successfully Created.',
          auth: true,
          data: {
            user,
          }
        })
      })
    }).catch(next)
  },

  //Retrives user profile info
  show(req, res, next) {
    User.getByUserId(req.user.id)
      .then(user => {
        res.status(201).json({
          message: 'User Profile Retrived.',
          data: {
            user,
          }
        })
        
      }).catch(next)
  },

  //Allow users to edit their profiles
  update(req, res, next) {
    User.getByUserId(req.params.id)
      .then((user) => {
        return user.update(req.body, user.id)
      }).then((user) => {
        res.status(201).json({
          message: 'User Profile Updated.',
          data: {
            user,
          }
        })
      }).catch(next)
  },
}

module.exports = usersController