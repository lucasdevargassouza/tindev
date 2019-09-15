const express = require('express');
const DevController = require('./../controllers/dev-controller');
const LikeController = require('./../controllers/like-controller');
const DislikeController = require('./../controllers/dislike-controller');

// Instancia o server
const routers = express.Router();

// Escuta um metodo get nessa rota
routers.get('/', (req, res) => {
    return res.json({ message: 'Tindev' });
});

// Escuta um metodo get nessas rotas
routers.get('/devs', DevController.index);

// Escuta um metodo post nessas rotas
routers.post('/devs', DevController.store);
routers.post('/devs/:devId/like', LikeController.store);
routers.post('/devs/:devId/dislike', DislikeController.store);

// Exporta o módulo de rotas
module.exports = routers;