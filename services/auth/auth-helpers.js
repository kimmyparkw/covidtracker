const bcrypt = require('bcryptjs')

//Compares Password during user authentication.  
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword)
}

module.exports = {
  comparePass,
}