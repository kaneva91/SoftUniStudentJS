const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.bracelet.get);
router.post('/create', controllers.bracelet.post);
router.get('/:id', controllers.bracelet.getDetails);


module.exports = router;