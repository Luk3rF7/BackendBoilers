// npm install sequelize:
//npm install pg-hstore sequelize

const Sequelize = require('sequelize');
const driver = new Sequelize(
  'heroes',
  'luker',
  'senhaSecret',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false,
  }
)

async function main() {
  const Herois = driver.define('herois', {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING,
      required: true,
    },
    poder: {
      type: Sequelize.STRING,
      required: true,
    },
  }, {
    tableName: 'TB_HEROIS',
    freezeTabName: false,
    timestamps: false,
  })
  //para adicionar 
  await Herois.create({
    name: 'laterna verde',
    poder: 'anel',
  })
  await Herois.sync()

  const result = await Heroi.findAll({ raw: true })
  console.log('Result: ', result)
}

main();