const passport = require("passport")
const User = require("../../models/User")

//Passport NPM 
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username)
  });

  passport.deserializeUser((username, done) => {
    User.getByUserName(username)
      .then((user) => {
        done(null, user)
      })
      .catch((err) => {
        done(err, null)
      })
  })
}
