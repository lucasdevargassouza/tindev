const Dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: 'User not exists' });
        }

        if (loggedDev.likes.includes(targetDev._id)) {
            return res.status(200).json({ info: 'Already liked' });
        }


        if (targetDev.likes.includes(loggedDev._id)) {
            console.log("Match");
        }

        loggedDev.likes.push(loggedDev._id);


        return res.status(202).json({ ok: true });
    }
}
