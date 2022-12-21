const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Food_Factory', {
  useUnifiedTopology : true,
  useNewUrlParser    : true,
})

module.exports = mongoose.connection
