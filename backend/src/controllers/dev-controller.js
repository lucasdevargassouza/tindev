const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } },
            ],
        });

        return res.json(users);

    },

    async store(req, res) {
        const { username } = req.body;
        
        // Verifica se o usuário que está sendo cadastrado já existe.
        const userExists = Dev.findOne({ user: username });
        
        // Retorna o usuário caso ele já exista no sistema.
        if (userExists) 
            return res.json(userExists);
        
        // Pega um usuário da api di github.
        const response = await axios.get(`https://api.github.com/users/${username}`);

        // Separa as informações do usuário com um metodo novo do js. 
        const { name, bio, avatar_url } = response.data;

        // Insere um usuário na base de dados. 
        const dev = await Dev.create({
            name: name != null ? name : "",
            user: username,
            bio: bio,
            avatar: avatar_url
        });

        // Retorna o usuário criado.
        return res.json(dev);
    }
};
