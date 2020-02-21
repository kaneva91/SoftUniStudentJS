const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get',controllers.category.get.getAll);

module.exports = router;