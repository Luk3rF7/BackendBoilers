const fs = require('fs')

fs.writeFile('file.txt', 'hello world!', (error) => {
  if (error) throw error
  console.log('DataWritten to file');
})