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
    if(req.body.email  || req.body.password) {
      User.getByUserId(req.params.id)
        .then((user) => {
          const changes = {}
          if (req.body.email) { changes.email = req.body.email }
          if (req.body.password) {
            const salt = bcrypt.genSaltSync()
            const hash = bcrypt.hashSync(req.body.password, salt)
            changes.password_digest = hash
          }
          return user.update(changes, user.id)
        }).then((user) => {
          res.status(201).json({
            message: 'User Profile Updated.',
            auth: true,
            data: {
              user,
            }
          })
        }).catch(next)
    } else return console.log ("HERE",req),res.status(201).json({  
        message: 'No Changes.  User Profile Not Updated',
        auth: true,
        data: {
          user: req.user
        }
      }) 
  },
}

module.exports = usersController