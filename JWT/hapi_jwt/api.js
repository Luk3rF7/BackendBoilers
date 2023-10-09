// npm i vision inert haí-swagger

const Hapi = require('hapi')
const Context = require('./src/db/strategies/base/contextStrategy')
const MongoDB = require('./src/db/strategies/mongodb/mongoDbStrategy')
const HeroSchema = require('./src/db/strategies/mongodb/schemas/heroSchema')
const HeroRoutes = require('./src/routes/heroRoutes')
const AuthRoutes = require('./src/routes/authRoutes')
//swagger 

const HapiSwagger = require('hapi-swagger')
const Vision = require('vision');
const Inert = require('inert');
const JWT_SECRET = 'MEU_SEGREDO'
const app = new Hapi.Server({
    port: 4000
})

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    const connection = MongoDB.connect()
    const mongoDb = new Context(new MongoDB(connection, HeroSchema))
   const swaggerOptions = {
    info:{
        titile:'Api Herois  - Teste CrusoNodeBr',
        version: 'v1.0'
    },
    lang:'pt'
   }
    await app.register([
        Vision,
        inert,
        {
        plugin: HapiSwagger,
        options :swaggerOptions,
        }
    ])


    app.route([
        ...mapRoutes(new HeroRoutes(mongoDb), HeroRoutes.methods()),
        ...M
    ])

    await app.start()
    console.log('server running at', app.info.port)

    return app;
}
module.exports = main()