//Set up local strategy and determine whether a user can log-in or not.  
//Passport middleware should use a new instace of LocalStrategy
//Passing it a blank options argument and callback fnctn.

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//Requires (note in this case ./passport is a file, not a refernce to the NPM)
const init = require('./passport')
const User = require('../../models/User')
const authHelpers = require('./auth-helpers')

const options = {}
init()

passport.use(
    new LocalStrategy(options, (username, password, done) => {
        console.log('local strategy')
        User.getByUserName(username)
            .then(user => {
                console.log(user)
                if (!user) {
                    return done(null, false)
                }
                if (!authHelpers.comparePass(password, user.password_digest)) {
                    console.log('Unsuccessful Test')
                    return done(null, false)
                } else {
                    console.log('Successful Check', user)
                    return done(null, user)
                }
            }).catch(err => {
                console.log(err)
                return done(err)
        })
    })
)

module.exports = passport