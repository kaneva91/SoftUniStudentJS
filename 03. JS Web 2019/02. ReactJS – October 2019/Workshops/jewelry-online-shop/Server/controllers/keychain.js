const models = require('../models');

module.exports = {
    get: {
        getAll: (req, res, next) => {
            models.Keychain.find()
                .then(keychains => res.send(keychains))
                .catch(next)
        },
        getDetails: (req, res, next) => {
            const id =  req.params.id ;
            models.Keychain.findById(id)
                .then(keychain => res.send(keychain))
                .catch(next)
        }
    },
    post: {
        create: (req, res, next) => {
            const { name, url, description, price } = req.body;
            models.Keychain.create({ name, url, description, price })
                .then(created => res.send(created))
                .catch(next)
        }
    }

}
