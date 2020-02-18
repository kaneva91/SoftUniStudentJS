const models = require('../models');

module.exports = {
    get: {
        getAll: (req, res, next) => {
            const categoryName = req.query.query;
            models.Product
                .find({category : categoryName})
                .then(resp => res.send(resp))
                .catch(next)
        }
    }
}