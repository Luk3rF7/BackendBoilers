// inserindo dados :  chave - valor

localStorage.setItem('item', 'valor produto')


// pegando valores 
const date = localStorage.getItem('item')
console.log(date)
// resgatando item que nao existe no localstorage

const prod_stoque = localStorage.getItem('quantidade')

console.log(prod_stoque)

if (!prod_stoque) {
  console.log('não tem quantidade')
}
// 5 remover item 
localStorage.removeItem('item')
// 6 limpar todo os item 

localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

// localStorage.clear()

// enviando dado com json
const person = {
  nome: 'lucas',
  sobrenome: 'felipe',
  idade: 20
}

localStorage.setItem('pessoa', JSON.stringify(person))

// resgatar 
const getPersonLocal = localStorage.getItem('pessoa')
//converto 
const personLocalObj = JSON.parse(getPersonLocal)

