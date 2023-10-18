const http = require("http");

const option = {
  hostname: 'localhost',
  port: 3002,
  path: '/',
  method: 'GET'
}

const req = http.request(option, (res) => {
  console.log(`STATUS:${res.satusCode}`);
  console.log(`HEADER :${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  });
  res.on('end', () => {
    console.log('sem resposta de dados...')
  })
  res.on('Error', (e) => {
    console.error(`houve um problema na requisição ${e.message}`)
  })
})

req.end()