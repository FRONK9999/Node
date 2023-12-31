const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contactController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// contact routes 
route.get('/contact', contatoController.paginaInicial)
module.exports = route
