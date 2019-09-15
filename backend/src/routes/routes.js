const express = require('express');

const DevController = require('./../controllers/dev-controller');

// Instancia o server
const routers = express.Router();

// Escuta um metodo get nessa rota
routers.get('/', (req, res) => {
    return res.json({ message: 'Tindev' });
});

// Escuta um metodo post nessa rota
routers.post('/devs', DevController.store);

// Exporta o módulo de rotas
module.exports = routers;