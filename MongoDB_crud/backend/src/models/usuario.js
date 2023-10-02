const mongoose = require('mongoose');
//plugin instanciando 
const mongoosePaginate = require('mongoose-paginate');

// vai estar todo meu modelo em uma variavel :


const UserSchema = new mongoose.Schema({
  // definir nome do mongodb
  nome: {
    type: String,
    required: true,
    uppercase: true,
    minlength: 3,
    maxlength: 100,
  },
  matricula: {
    type: Number,
    required: true,
    min: 1,
    max: 999,
    unique: true
  },
  ativo: {
    type: Boolean,
    default: true,
    required: true
  },
  endereco: {
    cidade: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
    },
    estado: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 2
    },
  },
  creatAt: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.plugin(mongoosePaginate);
//dizer pro moongose
mongoose.model('User', UserSchema);
