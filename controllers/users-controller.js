const bcrypt = require('bcryptjs')
const User = require('../models/User')

const usersController = {}

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
            res.redirect("/user/profile") //Not sure about this part...
        })
    }).catch(next)
}


module.exports = usersController