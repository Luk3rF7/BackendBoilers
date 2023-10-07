//npm install mongoose

const Mongoose = require('moongose');
// conectar com mongoDB com banco
Mongoose.connect('mongodb://localhost:',
  { useNewParser: true },
  function (error) {
    if (!error) return;
    console.error('Falha na Conexão', error)
  });
connection.once('open', () => console.log('Executando'))
//schema - 1 
const heroiSchema = new Mongoose.Schema({
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

const model = Mongoose.model('heroi', heroiSchema)
async function main() {
  const resultCadastrar = model.create({
    nome: 'Batman',
    poder: 'Inteligencia',
  })
  console.log('result', resultCadastrar)
  const listItens = await model.find()
  console.log('items', listItens)
}
main();
