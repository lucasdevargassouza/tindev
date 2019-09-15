const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url } = response.data;

        const dev = await Dev.create({
            name: name != null ? name : "",
            user: username,
            bio: bio,
            avatar: avatar_url
        });

        return res.json(dev);
    }
};
