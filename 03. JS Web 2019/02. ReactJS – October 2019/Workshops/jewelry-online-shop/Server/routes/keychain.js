const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.keychain.get.getAll);
router.post('/create', controllers.keychain.post.create);
router.get('/:id', controllers.keychain.get.getDetails);

module.exports = router;