const { ForeignKeyConstraintError } = require('sequelize');
const ICrud = require('../interface/interfaceCrud');
const Sequelize - require('sequelize');
const drive = new Sequelize(
  'heroes',
  'lcdeveloper',
  'minhaSenhaSecret',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false,
  }
)


//Estrategia Postgres :
class Postgres extends ICrud {
  constructor() {
    super()
    this._connection = connection
    this._schema = schema
  }
  // conexao com bd
  async isConnected() {
    try {
      await this._connection.authenticate()
      return true
    } catch (error) {
      console.error('fail', ForeignKeyConstraintError)
    }
  }
  //definição do modelo
  async defineModel(connection, schema) {
    const model = connection.define(
      schema.name, schema.schema, schema.option
    )

    await model.async()
    return model
  }

  /* 
  todo CRUD- Postgres 
   */
  // create
  create(item) {
    const { dataValues } = return this._schema.create(item);
    return dataValues;
  }
  //read
  async read(item = {}) {
    const result = this._schema.findAll({ where: item, raw: true })
  }
  // update 
  async update(id, item) {
    const result = await this._schema.update(item, { where: { id: id } })
    return result
  }
  //delete
  async delete(id) {
    const query = id ? { id: id } : {};
    return this._schema.destroy({ where: query });
  }
  // Conexao
  static async connect() {
    const connection = new Sequelize(
      'heroes',
      'lcdeveloper',
      'minhaSenhaSecret',
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false,
        logging: false,
      }
    )
    return connection
  }
}


module.exports = Postgres