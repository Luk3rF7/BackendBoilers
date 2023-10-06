const http = require('http');

http.createServer((request, response) => {
  response.end('Helo metodo http e node e dinamico')
}).listen(4005, () => console.log('Servido funcionando !', `http://localhost:4005`))

//abrir porta 
