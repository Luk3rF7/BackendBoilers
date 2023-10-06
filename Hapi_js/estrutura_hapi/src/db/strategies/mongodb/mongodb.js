const ICrud = require('../interface/interfaceCrud');
const Mongoose = require('mongoose')

const STATUS = {
  0: 'Disconnect',
  1: 'Connected',
  2: 'Connection',
  3: 'Disconnected'
}


//estrategia BD MongoDB
class MongoDB extends ICrud {

  constructor(connection, schema) {
    super()
    this._connection = connection
    this._schema = schema
  }
  //
  async isConneceted() {
    const state = STATUS[this._connection.readyState]
    if (state === 'Connected') return state;

    if (state !== 'Connection') return state
    await new Promise(resolve => setTimeout(resolve, 1000))
    return STATUS[this._connection.readyState]
  }
  //
  static connect() {
    Mongoose.connect('mongodb://localhost:',
      { useNewParser: true },
      function (error) {
        if (!error) return;
        console.error('Falha na Conexão', error)
      });
    const connection = Mongoose.connection
    connection.once('open', () => console.log('Executando'))
    return connection

  }

  create(item) {
    return Mongoose.model.create(item)
  }
  read(item, skip = 0, limit = 10) {
    return this._connection.find(item).skip(skip).limit(limit)
  }
  update(id, item) {
    return this._connection.updateOne({ _id: id, { $set: { item } }})
}
delete (id){
  return this._connection.deleteOne(_id: id)
}
}


module.exports = MongoDB;