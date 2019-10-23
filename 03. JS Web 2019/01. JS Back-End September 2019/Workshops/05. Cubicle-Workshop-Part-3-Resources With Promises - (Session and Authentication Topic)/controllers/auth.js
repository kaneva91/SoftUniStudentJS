const userModel = require('../models/user');

function getLogin(req, res) {
    res.render('login.hbs');
}


function getRegster(req, res) {
    res.render('register.hbs');
}


function postRegister(req, res, next) {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        res.render('register.hbs', {
            errors: {
                repeatPassword: 'Password and repeat password don\'t match!'
            }
        });
        return;
    }

    return userModel.create({ username, password }).then(() => {
        res.redirect('/login');
    }).catch(err => {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.render('register.hbs', {
                errors: {
                    username: 'Username already taken!'
                }
            });
            return;
        }
        next(err);
    });
}


function postLogin(req, res) {
    const { username, password } = req.body;

    userModel.findOne({ username })
        .then(user => Promise.all([user, user.matchPassword(password)]))
        .then(([user, match]) => {
            if(!match){
                res.render('login.hbs', {errors : {message : 'Invalid username or password!'}})
            }
            else{
                res.redirect('/', {user});
            }
        })
    
        
}



module.exports = {
    getLogin,
    postLogin,
    getRegster,
    postRegister
}