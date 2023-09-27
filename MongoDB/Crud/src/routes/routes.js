const express = require('express');
const routes = express.Router();

const usuarioController = require('../controllers/usuarioController')


routes.post('/usuario', usuarioController.insert);
routes.get('/usuario', usuarioController.select);
// acha por id
routes.get('/usuario/:id', usuarioController.findUser);

module.exports = routes;