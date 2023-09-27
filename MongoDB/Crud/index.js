const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
require('dotenv').config();
const url = process.env.URL_MONGO


const port = 3005
const app = express();

// permita que insira em formato json:
app.use(express.json());
// permita utilização do cors:
app.use(cors());

// mongoDb connectar 
mongoose.connect(process.env.URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.emit("Pronto")
  console.log('MongoDb connectado !')
}).catch((err) => console.error('error bd', err))


requireDir('./src/models');

app.use('/sistema', require('./src/routes/routes'));

app.listen(port, () => {
  console.log('backend executando com sucesso!')

})