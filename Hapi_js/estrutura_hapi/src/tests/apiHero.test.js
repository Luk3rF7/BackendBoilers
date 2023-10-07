const assert = require('assert');

const api = require('./../api');

describe('Suite de Teste da API heros', function () {
  this.beforeAll(async () => {
    api = await api;
  })

  it('listar / herois', async () => {
    const result = app.inject({
      method: 'GET',
      url: '/herois',
    })
    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode
    assert.deepEqual(statusCode, 200)
    assert.ok(Array.isArray(dados))

  })
})