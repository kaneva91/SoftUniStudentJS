const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Earings.find()
            .then(earings => res.send(earings))
            .catch(next)
    },
    post: (req, res, next) => {
        const { name, url, description, price } = req.body;
        models.Earings.create({ name, url, description, price })
            .then(created => res.send(created))
            .catch(next)
    },

    getDetails: (req, res, next) => {
        const query = { _id: req.params.id };
        models.Earings.findById(query)
            .then(data => res.send(data))
            .catch( err=> console.log(err))
    }
}