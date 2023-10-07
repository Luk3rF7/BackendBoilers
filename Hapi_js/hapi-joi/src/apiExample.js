// npm install hapi
const Hapi = require('hapi');
// mongodb import
const Context = require('./db/strategies/base/contextStrategy');
const MongoDb = require('./db/strategies/mongodb/mongodb');
const HeroRoutes = require('./routes/heroRoutes');
const HeroiSchema = require('./db/strategies/mongodb/Schema/herois');

const app = new Hapi.Server({
  port: 5000
});
// função  obj e trazer nome do nosso projeto:
function mapRoutes(instancia, methods) {

  return methods.map(method => instancia[method])
}



async function main() {
  // inicializamos a conexao :
  const connection = MongoDb.connect();
  const context = new Context(new MongoDb(connection, HeroiSchema))
  app.route([
    ...mapRoutes(new HeroRoutes(context), HeroRoutes.methods())
  ])
  await app.start()
  console.log('Servidor rodando na porta', app.info.port)
  return app
}
module.exports = main();