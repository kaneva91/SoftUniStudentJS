const articleModel = require('../models/article');
const userModel = require('../models/user');

function getCreate(req, res) {
    res.render('create.hbs')
}

function postCreate(req, res, next) {
    const { title, content } = req.body;

    articleModel.create({ title, content, author: req.user._id })
        .then(article => {
            return userModel.findByIdAndUpdate({ _id: req.user._id }, { $push: { articles: article._id } })
        })
        .then(() => res.redirect('/'))
        .catch((err) => {
            const errorMessages = Object.entries(err.errors)
                .map(x => {
                    return x[1].message
                })
            res.render('create.hbs', { errorMessages });
        });
}

function all(req, res, next){
    articleModel
    .find()
    .sort('-creationDate')
    .limit(3)
    .then(articles => {
      articles.forEach(a => console.log(a.content.split(' ')))
       //= a.content.split(' ').slice(0, 50).join(' '))
    })
            
}


module.exports = {
    getCreate,
    postCreate,
    all
}