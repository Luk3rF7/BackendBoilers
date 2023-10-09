const BaseRoute = require('./base/baseRoute');
const Joi = require('joi');
const Boom = require('boom');
const Jwt  =require('jsonwebtoken')
const failAction = (request,header,error) => {
  throw error;
}

class AuthRoutes extends BaseRoute {
  constructor(secret){
    this.secret = secret
  }
  login(){
    return {
      path:'/login',
      method:'POST',
      config:{
        auth:false,
        tags:['api'],
        description:'Obter token',
        notes: 'faz login com user e senha do banco',
        validate:{
          payload:{
            username: Joi.string().required(),
            password:Joi.number().required()
          }
        }
      },
      handler: async (request) => {
        const {
          username,
          password}
           = request.payload
           if(username.toLowerCase() !== USER.username) || 
           password !== USER.password
           return Boom.unauthorized()
          const token = Jwt.sign({
            username: username,
            id:1
          },this.secret)
          return {
            token
          }
      }
    }
  }
}

module.exports  = AuthRoutes;