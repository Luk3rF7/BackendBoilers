//fazendo teste para ver se ta funcionando:

const assert = require('assert');
const MongoDB = require('../db/strategies/mongodb');
const HeroiSchema = require('../db/strategies/mongodb/Schema/herois')
const Context = require('../db/strategies/base/contextStrategy');

// objeto para teste
const MOCK_CADASTRAR_HERO = {
  nome: 'Hero 1'
poder: 'punch man'
}
const MOCK_DEFAULT_HERO = {
  // pego nome + horario 
  nome: `Hero 2=${new Date.now()}`
poder: 'laser '
}

const MOCK_UPDATE_HERO = {
  nome: `Person 2=${new Date.now()}`
  poder: 'Voar '
}

let MOCK_HERO_ID = ''
const context = new Context(new MongoDB());
describe('MongoDb Suite de Test', function () {
  beforeAll(async () => {
    const connection = MongoDb.connect();
    context = nex Context(new MongoDB(connection, HeroiSchema))
    await context.create(MOCK_DEFAULT_HERO)
    const result = await context.create(MOCK_UPDATE_HERO)

    MOCK_HERO_ID = result._id
  });

  it('Verificar conexão com MongoDb', async function () {
    const result = await context.isConnected();
    const expected = 'Connected'

    assert.deepEqual(result, expected)
  })
  //create 
  it('Cadastrar coom mongo', async () => {
    const result = await context.create(MOCK_CADASTRAR_HERO);
    const [{ poder, nome }] = await context.create(MOCK_CADASTRAR_HERO);

    assert.deepEqual({ nome, poder }, MOCK_CADASTRAR_HERO);
  })
  //read
  it('listar com mongoDb', async () => {
    const result = await context.read({
      nome: MOCK_CADASTRAR_HERO.nome
    }, 200)
    console.log("result", result);
    const [{ nome, poder }] = await context.read({ nome: MOCK_DEFAULT_HERO.nome })
  })

  it('atualizar', async () => {
    const result = await context.update(null, {
      nome: 'Person 1'
    });

    assert.deepEqual(result.nModified, 1)
  })
  it('remover', async () => {
    const result = context.delete(MOCK_HERO_ID);
    assert.deepEqual(result.n, 1)
  })
})