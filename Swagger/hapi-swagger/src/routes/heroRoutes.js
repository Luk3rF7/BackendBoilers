const BaseRoute = require('./base/baseRoute')
const Joi = require('joi')
class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            config: {
                tag: ['api'],
                describe:'Deve listar herois',
                notes:'pode paginar resultado e filtrar por nome',
                validate: {
                    failAction,
                    query: {
                        skip: Joi.number().integer().default(),
                        limit: Joi.number().integer().default(),
                        nome: Joi.string().min(3).max(100)
                    }
                },

            },
            handler: (request, headers) => {
                return this.db.read()
            }
        }
    }
    create() {
        return {
            path: '/herois',
            method: 'POST',
            config: {
                tag: ['api'],
                describe:'Cria um novo usuario ',
                notes:'gera novo registro de usuario no bd',
                validate: {
                    failAction: (request, h, err) => {
                        throw err;
                      },
                    payload: {
                        nome: Joi.string().max(100).required(),
                        poder: Joi.string().max(30).required()
                    }
                },

            },
            handler: (request, headers) => {
                const payload = request.payload
                return this.db.create(payload)
            }
        }
    }
    update() {
        return {
            path: '/herois/{id}',
            method: 'PATCH',
            config: {
                tag: ['api'],
                describe:'Atualiza dados do heroi ',
                notes:'atualizar o cadastro do usuario',
                validate: {
                    failAction: (request, h, err) => {
                        throw err;
                      },
                    payload: {
                        nome: Joi.string().max(100),
                        poder: Joi.string().max(30)
                    },
                    params: {
                        id: Joi.string().required()
                    }
                },

            },
            handler: (request, headers) => {
                const payload = request.payload;
                const id = request.params.id;
                return this.db.update(id, payload)
            }
        }
    }
    delete() {
        return {
            path: '/herois/{id}',
            method: 'DELETE',
            config: {
                tag: ['api'],
                describe:'Deletar o Id ou usuario',
                notes:'O id deve ser valido',
                validate: {
                    failAction: (request, h, err) => {
                        throw err;
                    },
                    params: {
                        id: Joi.string().required()
                    }
                }
            },
            handler: (request, headers) => {
                const id = request.params.id;
                return this.db.delete(id)
            }
        }
    }

}

module.exports = HeroRoutes