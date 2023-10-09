const assert = require('assert');
const api = require('../api');
let app ={};

describe('Auth test Suite',function (){
  this.beforeAll(async () => {
    app await api
  })

  it('deve obter um token',async () => {
    const result = await app.inject({
        method:'POST',
        url:'/loggin',
        payload: {
          username: 'Usuario 1',
          password:'123',
        }
    })
    const statusCode = result.statusCode
    const dados = JSON.parse(result.payload)

    assert.deepEqual(statusCode,200)
    assert.ok(dados.token > 10)
  })
})
