const assert = require('assert');

const api = require('./../api');
let api = {}
const DEFAULT_CADASTRAR_HERO = {
  nome: 'chapolin colorado',
  poder: 'Marreta bionica'
}
describe('Suite de Teste da API heros', function () {
  this.beforeAll(async () => {
    api = await api;
  })
  // listar
  it('listar / herois', async () => {
    const result = app.inject({
      method: 'GET',
      url: '/herois?skip=0&limit=10',
    })
    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode

    assert.deepEqual(statusCode, 200)
    assert.ok(Array.isArray(dados))
  })
  // listar com filtro
  it('listar /heroi - deve filtrar 1 item ', async () => {
    const NAME = 'user_1-12354784151'
    const result = await app.inject({
      method: 'GET',
      url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
    })

    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode

    assert.deepEqual(statusCode, 200)
    assert.ok(dados.length === TAMANHO_LIMITE)
    assert.deepEqual(dados[0].nome, NOME)
  })
  // lista com erro
  it('listar /heroi - deve retornar um erro com limit errado', async () => {
    const TAMANHO_LIMITE = "AEE"
    const result = await app.inject({
      method: 'GET',
      url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
    })
    const errorResult = {
      "statusCode": 400,
      "error": "Bad Request",
      "message": "child\"limit\" fails becausa [\"limit\" must be a number]",
      "Validation": {
        "source": "query",
        "keys": ["limit"]
      }
    }
    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode

    assert.deepEqual(result.statusCode, 400);
    assert.deepEqual(result.payload, JSON.stringify(errorResult));
  })
  // lista 
  it('listar /heroi - deve retornar somente 10 -registro', async () => {
    const TAMANHO_LIMITE = 3
    const result = await app.inject({
      method: 'GET',
      url: `/herois?skip=0&limit=${TAMANHO_LIMITE}`
    })
    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode

    assert.deepEqual(statusCode, 200)
    assert.ok(dados.length === TAMANHO_LIMITE)
  })
  // cadastrar
  it('cadastrar POST - /heroi', async () => {
    const result = await app.inject({
      method: 'POST',
      url: `/herois`,
      payload: DEFAULT_CADASTRAR_HERO
    });

    const statusCode = result.statusCode;
  })
})