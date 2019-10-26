const jwt = require('jsonwebtoken');
const {secret} = require('../app-config');

function createToken(userId){
    return jwt.sign(userId, secret, {expiresIn : '10m'});
}


function verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, data) => {
        if (err) { reject(err); return; }
        resolve(data);
      });
    });
  }
   

module.exports = {
    createToken,
    verifyToken
}