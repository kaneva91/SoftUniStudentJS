const {userController} = require('../controllers/index');
const {articleController} = require('../controllers/index');
const auth = require('../ulils/auth');

module.exports = (app) => {
    app.get('/', userController.index)
    app.get('/login', userController.getLogin);
    app.post('/login', userController.postLogin);
    app.get('/register', userController.getRegister);
    app.post('/register', userController.postRegister);
    app.get('/logout', userController.logout);
    app.get('/createArticle', auth(), articleController.getCreate); 
    app.post('/createArticle', auth(), articleController.postCreate);
    app.get('/all', articleController.all)
    app.get('*', (req, res) => {
        res.send('not found')
    }); 
};