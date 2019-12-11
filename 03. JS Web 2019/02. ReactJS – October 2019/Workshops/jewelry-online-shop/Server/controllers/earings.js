const models = require('../models');

module.exports = {
    get: {
        getAll: (req, res, next) => {
            models.Earings.find()
                .then(earings => res.send(earings))
                .catch(next)
        },
        getDetails: (req, res, next) => {
            const id =  req.params.id ;
            models.earings.findById(id)
                .then(earings => res.send(earings))
                .catch(next)
        }
    },
    post: {
        create: (req, res, next) => {
            const { name, url, description, price } = req.body;
            models.Earings.create({ name, url, description, price })
                .then(created => res.send(created))
                .catch(next)
        }
    }

}
