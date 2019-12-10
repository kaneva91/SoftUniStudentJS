const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Bracelet.find()
            .then(bracelets => res.send(bracelets))
            .catch(next)
    },
    post: (req, res, next) => {
        const { name, url, description, price } = req.body;
        models.Bracelet.create({name, url, description, price})
        .then(created => res.send(created))
        .catch(next)
    }
}