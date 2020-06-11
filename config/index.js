module.exports = require('mongoose').connect('mongodb://localhost/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})