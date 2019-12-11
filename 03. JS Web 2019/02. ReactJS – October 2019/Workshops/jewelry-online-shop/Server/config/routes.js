const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);
    app.use ('/api/keychains', router.keychain);
    app.use('/api/bracelets', router.bracelet);
    app.use('/api/earings', router.earings);

  
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};