// class de como funciona strategy

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
  connect() {
    throw new notImplementedException();
  }
}
// sem {} ele fica modo public
module.exports = ICrud;
