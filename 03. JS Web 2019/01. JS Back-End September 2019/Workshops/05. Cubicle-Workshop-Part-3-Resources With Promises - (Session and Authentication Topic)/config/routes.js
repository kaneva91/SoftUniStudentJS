const cubeConrtolers = require('../controllers/cube');
const accessoryControlers = require('../controllers/accessory');
const authControlers = require('../controllers/auth');

module.exports = (app) => {
    app.get('/', cubeConrtolers.index);
    app.get('/about', cubeConrtolers.about);
    app.get('/create', cubeConrtolers.getCreate);
    app.post('/create', cubeConrtolers.postCreate);
    app.get('/login', authControlers.getLogin);
    app.post('/login', authControlers.postLogin);
    app.get('/register', authControlers.getRegster);
    app.post('/register', authControlers.postRegister);
    app.get('/details/:id', cubeConrtolers.details);
    app.get('/create/accessory', accessoryControlers.getCreate);
    app.post('/create/accessory', accessoryControlers.postCreate);
    app.get('/attach/accessory/:id', accessoryControlers.getAttach);
    app.post('/attach/accessory/:id', accessoryControlers.postAttach);
    app.get('*', cubeConrtolers.notFound);
};