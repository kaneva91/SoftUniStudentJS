let cubeModel = require('../models/cube-model');

function getIndex(req, res){
    const{from, to, search} = req.body;
    console.log(from, to, search);
    const cubes = cubeModel.getAllCubes();
    res.render('index.hbs', {cubes}); 
}

function getAbout(req, res){
    res.render('about.hbs');
}

function getCreate(req, res){
    res.render('create.hbs');
}

function postCreate(req, res){
    const {name, description, imageUrl, difficultyLevel } = req.body;
        cubeModel.insert({name, description, imageUrl, difficultyLevel});

        res.redirect('/');
}

function getDetails(req, res){ 
    const id =+req.params.id;
    const cube = cubeModel.findOne(id);
    console.log(cube);
    res.render('details.hbs', {cube});
}

function notFound(req, res) {
    res.render('404.hbs');
}

module.exports = {
    getIndex,
    getAbout,
    getCreate,
    postCreate,
    getDetails,
    notFound
};