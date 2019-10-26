
const jwt = require('./jwt');
const { cookieName } = require('../app-config');
const userModel = require('../models/user');

function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const token = req.cookies[cookieName] || '';
        Promise.all([
            jwt.verifyToken(token),
        ]).then((data) => {
            userModel.findById(data[0].userId).then(user => {
                req.user = user;
                next();
            });
        }).catch(err => {
            if (!redirectUnauthenticated) { next(); return; }
            next(err);
        });
    };
}

module.exports = auth;