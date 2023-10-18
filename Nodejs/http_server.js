const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-Type': 'text/plain' });
  res.end('hello world!')
})

server.listen(3000, () => {
  console.log('Servidor ativo na porta local 3000')
})