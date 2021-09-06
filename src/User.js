const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  isPremium: Boolean
})

module.exports = mongoose.model('User', UserSchema)
