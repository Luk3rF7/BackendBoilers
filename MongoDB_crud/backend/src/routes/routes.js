const express = require('express');
const routes = express.Router();

const usuarioController = require('../controllers/usuarioController');

// rota criar
routes.post('/usuario', usuarioController.insert);
//rota buscar e mostrar
routes.get('/usuario', usuarioController.select);
//rotar acha por id
routes.get('/usuario/:id', usuarioController.findUser);
//rota atualizar rota
routes.put('/usuario/:id', usuarioController.update);
// rota Delete:
routes.delete('/usuario/:id', usuarioController.deletarUser);
module.exports = routes;