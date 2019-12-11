const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.earings.get);
router.post('/create', controllers.earings.post);
router.get('/:id', controllers.earings.getDetails);


module.exports = router;