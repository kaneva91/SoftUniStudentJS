const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

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