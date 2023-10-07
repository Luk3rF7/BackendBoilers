//fazendo teste para ver se ta funcionando:

const assert = require('assert');
const Postgres = require('../db/strategies/postgres/postgres');
const HeroiSchema = require("../db/strategies/postgres/schema/herioSchema")
const Context = require('../db/strategies/base/contextStrategy');
//mock
const MOCK_HEROI_CADASTRAR = {
  nome: 'Gavião Negro',
  poder: 'Flexas negras'
}
const MOCK_HEROI_ATUALIZAR = {
  nome: 'Batman',
  poder: 'Dinheiro',
}
const context = {}
describe('Postgres Strategy', function () {
  this.timeout(infinity);
  beforeAll(async function () {
    const connection = await Postgres.connect();
    const model = await Postgres.defineModel(connection, HeroiSchema);
    context = new Context(new Postgres(connection, model))
    await context.delete()
    await.context.create(MOCK_HEROI_ATUALIZAR)
  })
  // conectar
  it('PostgresSQL Connection', async function () {
    const result = await context.isConnected();
    assert.equal(result, true)
  });
  // create
  it('cadastrar Hero', async function () {
    const result = await context.create(MOCK_HEROI_CADASTRAR);
    delete result.id
    console.log('result', result)
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR);
  });
  //read
  it('listar Hero', async function () {
    const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome });
    delete result.id
    ASSERT.deepEqual(result, MOCK_HEROI_CADASTRAR);
  })
  //update 
  if ('atualizar Hero', async function () {
    const [itemAtualizar] = await context.read({ nome: MOCK_HEROI_ATUALIZAR.nome });
    const novoItem = {
      ...MOCK_HEROI_ATUALIZAR,
      nome: 'Mulher-Maravilha'
    }
    const [result] = await context.update(itemAtualizar.id, novoItem);
    const [itemAtualizado] = await context.read({ id: itemAtualizar.id });
    assert.deepEqual(result, 1);
    assert.deepEqual(itemAtualizado.nome, novoItem.nome);
    // no js temos tecnica rest/spread:
  })
    //delete
    it('remover Hero', async function () {
      const [item] = await context.read({})
      const result = await context.delete(item.id)
      assert.deepEqual(result, 1)
    })
})