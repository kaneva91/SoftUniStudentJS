const controllers = require('../controllers/');
const router = require('express').Router();

 

router.get('/all', controllers.product.get.getAll);



module.exports = router;