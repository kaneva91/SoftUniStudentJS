const jwt = require('jsonwebtoken');
const {secret} = require('../app-config');

function createToken(userId){
    return jwt.sign(userId, secret, {expiresIn : '10m'});
}

function verifyToken(){

}

module.exports = {
    createToken,
    verifyToken
}