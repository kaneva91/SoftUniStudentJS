const cubeController = require('../controllers/cube-controlers');

module.exports = (app) => {

    app.get('/', cubeController.getIndex);
    app.get('/about', cubeController.getAbout);
    app.get('/create', cubeController.getCreate);
    app.post('/create', cubeController.postCreate);
    app.get('/details/:id', cubeController.getDetails),
    app.get('*', cubeController.notFound);
};