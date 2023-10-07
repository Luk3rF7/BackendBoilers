const BaseRoute = require('./base/baseRoutes');

class HeroRoutes = {
  constructor(db){
    this.db = db
  }

  list(){
    return {
      path: '/herois',
      method: 'GET',
      handler: (request, headers) => {
        try {
          const { skip, limit, nome } = request.query
          //
          let query = {}
          if (nome) {
            query.nome = nome
          }
          if (isNaN(skip)) {
            throw Error('O tipo do skip e incorrento')
          }
          if (isNaN(limit)) {
            throw Error('O tipo do limit e incorrento')
          }
          //

          return this.db.read(query,
            parseInt(skip),
            parseInt(limit));
        } catch (error) {
          console.error('Deu ruim', error);
          return 'Erro interno no servidor'
        }
      }
    }
  }
  create(){
    return {
      path: '/herois',
      method: 'POST',
      handler: (request, headers) => {
        return this.db.read()
      }
    }
  }

}

module.exports = HeroRoutes;