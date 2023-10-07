const BaseRoute = require('./base/baseRoutes');
const Joi = require('joi');
class HeroRoutes = {

  constructor(db){
    this.db = db
  }

  list(){
    return {
      path: '/herois',
      method: 'GET',
      config: {
        validade: {
          // payload -> body
          // header -> header
          // params -> na URL : id
          // query -> skip=0&limit=100
          failAction: {}
          query: {
            skip: Joi.number().integer().default(0),
            limit: Joi.number().integer().default(10),
            nome: Joi.string().min(3).max(100)
          }
        }
      }
      handler: (request, headers) => {
        try {
          const {
            skip,
            limit,
            nome } =
            request.query
          //
          const query = nome ? {
            nome: { $regex: `.*${nome}*` }
          } : {}

          return this.db.read(nome ? query : {}, skip, limit);
        } catch (error) {
          console.error('Deu ruim', error);
          return 'Erro interno no servidor'
        }
      }
    }
  }

}

module.exports = HeroRoutes;