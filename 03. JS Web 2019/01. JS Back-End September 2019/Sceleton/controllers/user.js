const userModel = require('../models/user');
const jwt = require('../ulils/jwt');
const {cookieName} = require('../app-config');
let {isLogged} =  require('../app-config');

function index (req, res) {
    res.render('home.hbs')
}


function getRegister(req, res){
    res.render('register.hbs')
}

function postRegister(req, res, next){
    let {username, password, repeatPassword} = req.body;

    if(password !== repeatPassword){ //validations to be added 
        res.redirect('/register');
        return;
    }

    username = username.toLowerCase();
    
    userModel.create({username, password})
    .then(()=> res.redirect('/login'))
    .catch(err => next(err));
}


function getLogin(req, res){
    res.render('login.hbs');
}


function postLogin(req, res, next){
    let {username, password} = req.body;

    userModel.findOne({username})
    .then(user =>Promise.all([ user, user.comparePasswords(password)]))
    .then(([user, match]) =>{
        if(!match){
            res.redirect('/login');
            console.log('err');
            return;
        }

        const token = jwt.createToken({userId : user._id});
        isLogged = true;
        res.cookie(cookieName,token).redirect('/');
    })
    .catch(next);
   

}

function logout(req, res) {

      res.clearCookie(cookieName).redirect('/');

  }

module.exports = {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    index,
    logout
}