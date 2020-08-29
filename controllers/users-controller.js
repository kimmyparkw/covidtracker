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
        console.log("Users Controller - Show", req.user.id)
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
    console.log("arrive user controller update")
    User.getByUserId(req.params.id)
      .then((user) => {
        console.log("User Line 47", user)
        return user.update(req.body, user.id)
      }).then((updatedUser) => {
        res.status(201).json({
          message: 'User Profile Updated.',
          data: {
            updatedUser,
          }
        })
      }).catch(next)
  },
}


module.exports = usersController