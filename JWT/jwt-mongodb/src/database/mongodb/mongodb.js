require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL
// mongo connection 

const mongoConnection = mongoose.connect(dbUrl).then(
  () => { console.log('Banco de dado conectado !') }
).catch((error) => console.error('Deu algo errado na conexão do banco!'))

module.exports = mongoConnection