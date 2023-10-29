const moongose = require('mongoose');

const User = moongose.model('colletionUser', {
  name: String,
  email: String,
  password: String,
})

module.exports = User