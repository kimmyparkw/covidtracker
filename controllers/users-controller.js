const bcrypt = require('bcryptjs')
const User = require('../models/User')

const usersController = {}

//NEW USER CREATION
usersController.create = (req, res, next) => {
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
}
    
//Allow users to edit their profiles
usersController.update = (req, res, next) => {
  User.getById(req.params.id)
    .then((user) => {
    return user.update(req.body)
    }).then((updatedUser) => {
    res.redirect('/user/profile')
  }).catch(next)
}
};


module.exports = usersController