const bcrypt = require('bcryptjs')

//Compares Password during user authentication.  
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword)
}

//Redirect when already logged in
function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/user/profile')
  next()
}

//Redirect when login is necessary to access route
function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login')
  next()
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
}