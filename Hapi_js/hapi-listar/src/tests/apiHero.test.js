const assert = require('assert');

const api = require('./../api');

describe('Suite de Teste da API heros', function () {
  this.beforeAll(async () => {
    api = await api;
  })
  //
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
  //
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
  //
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
})