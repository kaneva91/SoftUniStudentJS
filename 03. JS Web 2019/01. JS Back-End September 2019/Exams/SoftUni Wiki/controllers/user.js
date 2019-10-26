const userModel = require('../models/user');
const jwt = require('../ulils/jwt');
const { cookieName } = require('../app-config');


function index(req, res) {
    res.render('index.hbs');
}


function getRegister(req, res) {
    res.render('register.hbs')
}

function postRegister(req, res, next) {
    let { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.render('register.hbs', { errorMessages: ['Both passwords should match'] });
        return;
    }
    username = username.toLowerCase();

    userModel.create({ username, password })
        .then(() => res.redirect('/login'))
        .catch((err) => {
            if (err.name === 'MongoError') {
                res.render('register.hbs', { errorMessages: ['Username already taken!'] });
            }
            else if (err.name === 'ValidationError') {
                const errorMessages = Object.entries(err.errors)
                    .map(x => {
                        return x[1].message
                    })
                res.render('register.hbs', { errorMessages });
            }
        });
}


function getLogin(req, res) {
    res.render('login.hbs');
}


function postLogin(req, res, next) {
    let { username, password } = req.body;
    console.log(username, password);
    userModel.findOne({ username })
        .then(user => Promise.all([user, user.comparePasswords(password)]))
        .then(([user, match]) => {
            if (!match) {
                res.render('/', { errorMessages: ['Invalid username or password!'] });
                return;
            }

            const token = jwt.createToken({ userId: user._id });
            isLogged = true;
            res.
                cookie(cookieName, token)
                .cookie('username', user.username).redirect('/');
        })
        .catch(next);


}

function logout(req, res) {
    res
        .clearCookie(cookieName)
        .clearCookie('username')
        .redirect('/');
}

module.exports = {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    index,
    logout
}