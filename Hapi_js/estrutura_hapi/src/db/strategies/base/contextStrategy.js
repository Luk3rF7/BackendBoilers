const ICrud = require('../interface/interfaceCrud');


// criando contexto para trabalhar com BD:
class ContextStrategy extends ICrud {

  // aqui receberei qual estrategia BD:
  constructor(strategy) {
    super(),
      this._database = strategy
  }


  // chamo os metodo extendido do ICrud e utilizo:
  create(item) {
    return this._database.create(item)
  }
  read(item) {
    return this._database.read(item)
  }
  update(id, item) {
    return this._database.update(id, item)
  }
  delete(id) {
    return this._database.delete(id)
  }
  //connect
  isConnected() {
    return this._database.isConnected();
  }
  static connect() { return this._database.connect() }
}

module.exports = ContextStrategy;