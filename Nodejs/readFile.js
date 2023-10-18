const fs = require('fs')

fs.readFile('file.txt', 'utf-8', (error, data) => {
  if (error) throw error
  console.log(data)
})