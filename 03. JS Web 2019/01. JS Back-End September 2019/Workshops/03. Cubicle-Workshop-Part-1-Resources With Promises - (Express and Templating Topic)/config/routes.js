let conrtolers = require('../controllers/cube');

module.exports = (app) => {
    app.get('/', conrtolers.index);
    app.get('/about', conrtolers.about);
    app.get('/create', conrtolers.getCreate);
    app.post('/create', conrtolers.postCreate);
    app.get('/details/:id', conrtolers.details),
    app.get('*', conrtolers.notFound);
};