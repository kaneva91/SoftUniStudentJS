const controllers = require('../controllers/');
const router = require('express').Router();

 

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put);

router.get('/add/:id', controllers.user.add); //add item to cart


router.delete('/:id', controllers.user.delete);

module.exports = router;