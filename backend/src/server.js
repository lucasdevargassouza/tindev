const express = require("express"); // Importa o express dos módulos
const mongoose = require("mongoose"); // Importa o mongose para utilizar a base de dados do mongoDB

const routers = require('./routes/routes'); // Importa as rotas

// Instancia o server
const server = express();

// Faz a conexão com a base de dados
mongoose.connect('mongodb+srv://semana:semana@dbtestelucassouza-ljcwm.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define que o express vai usar json nas suas requisições
server.use(express.json());

// Usa o módulo de rotas contidos no outro arquivo
server.use(routers);

// Ativa a escuta do servidor para a porta declarada
server.listen(3333);
