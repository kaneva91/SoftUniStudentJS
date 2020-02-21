const models = require('../models');

module.exports = {
    get: {
        getAll: (req, res, next) => {
            models.Category
                .find({})
                .then(resp =>res.send(resp))
                .catch(next)
        }
    }
}