const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.bracelet.get);
router.post('/create', controllers.bracelet.post);

module.exports = router;