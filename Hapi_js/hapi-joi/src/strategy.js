// Exemplo de OO - com Strategy

// * Classe customizada de Error :

class notImplementedException extends Error {
  //caso metodo nao for implementado :
  constructor() {
    super("Not implemented Exception")
  }
}

// simulando interface : 

class ICrud {
  // metodos :
  create(item) {
    throw new notImplementedException();
  }

  read(query) {
    throw new notImplementedException();
  }

  update(id, item) {
    throw new notImplementedException();
  }
  delete(id) {
    throw new notImplementedException();
  }
}
//estrategia BD MongoDB
class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('O item foi salvo em MongoDB')
  }
}
//Estrategia Postgres :
class Postgres extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('O item foi Salvo em Postgress')
  }
}

// criando contexto para trabalhar com BD:

class ContextStrategy {

  // aqui receberei qual estrategia BD:
  constructor(strategy) {
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
    return this._database(id, item)
  }
  delete(id) {
    return this._database(id)
  }
}

//instancio:
const contextMongoDB = new ContextStrategy(new MongoDB());
const contextPostgres = new ContextStrategy(new Postgres());
contextMongoDB.create()
contextPostgres.create()
