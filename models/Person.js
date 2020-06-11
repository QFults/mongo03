const { Schema, model } = require('mongoose')

module.exports = model('Person', new Schema({
  username: String,
  email: String,
  password: String
}))
