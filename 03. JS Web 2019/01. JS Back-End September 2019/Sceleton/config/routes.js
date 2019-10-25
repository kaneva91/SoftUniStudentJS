const {userController} = require('../controllers/index');

module.exports = (app) => {
    app.get('/', userController.index)
    app.get('/login', userController.getLogin);
    app.post('/login', userController.postLogin);
    app.get('/register', userController.getRegister);
    app.post('/register', userController.postRegister);
    app.get('/logout', userController.logout)
    app.get('*', (req, res) => {
        res.send('not found')
    }); 
};