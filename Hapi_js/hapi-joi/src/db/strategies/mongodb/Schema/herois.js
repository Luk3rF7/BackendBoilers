const Mongoose = require('mongoose');
heroiSchema = new Mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  poder: {
    type: String,
    required: true
  },
  insertedAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = Mongoose.model('heroi', heroiSchema)