const controllers = require('../controllers/');
const router = require('express').Router();

 

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.get('/:id', controllers.user.get);

router.put('/:id', controllers.user.put);
    
router.put('/add/:id', controllers.user.add); 

router.get('/get/:id', controllers.user.getCartItems);

router.delete('/:id', controllers.user.delete);

router.put('/deleteCart/:id', controllers.user.deleteCart);

module.exports = router;