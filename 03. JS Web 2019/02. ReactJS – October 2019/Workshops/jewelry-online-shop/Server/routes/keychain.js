const controllers = require('../controllers');
const router = require('express').Router();

 

router.get('/', controllers.keychain.get);

router.post('/create', controllers.keychain.post);


module.exports = router;