// modulo de exportar:

const obj = {
  nome: 'jhon',
  sobrenome: 'Doe',
  idade: 29,
  cumprimentar: "Hello world!",
  falarAlgo() {
    console.log(`${this.falarAlgo}, my name is ${this.nome}${this.sobrenome} age : ${this.idade}`)

  }
}

module.exports = obj