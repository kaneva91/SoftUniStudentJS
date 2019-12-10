const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Keychain.find()
            .then(keychains => res.send(keychains))
            .catch(next)
    },
    post: (req, res, next) => {
        const { name, url, description, price } = req.body;
        models.Keychain.create({name, url, description, price})
        .then(created => res.send(created))
        .catch(next)
    }
}