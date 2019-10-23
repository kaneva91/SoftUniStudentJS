const cubeModel = require('../models/cube');

function index(req, res, next) {
    let { from, to, search } = req.query;
    let query = {};

    if (!!search) {
        search = search.toLowerCase();

        from = !!from ? +from : 1;
        to = !!to ? +from : 6;

        query = {...query, name: { $regex: search }, difficultyLevel : {$gte : from, $lte : to}};

    }

    cubeModel.find(query)
        .then(cubes => res.render('index.hbs', { cubes }))
        .catch(next);
}


function about(req, res) {
    res.render('about.hbs');
}


function getCreate(req, res) {
    res.render('create.hbs');
}


function postCreate(req, res, next) {
    let { name, description, imageUrl, difficultyLevel } = req.body;

    if (!!name && !!description && !!imageUrl && !!difficultyLevel) {
        name = name.toLowerCase();

        cubeModel.create({ name, description, imageUrl, difficultyLevel })
            .then(() => res.redirect('/'))
            .catch(err => {
                res.redirect('/create');
                next(err);
            });
    }
    else {    // if some of the fields are empty, redirects to the "/create'" page again to avoid writing incorrect data in the database 
        res.redirect('/create');
    }
}


function details(req, res, next) {
    const cubeId = req.params.id;

    cubeModel.findById(cubeId)
        .populate('accessories')
        .then(cube => {
            const accessories = cube.accessories.length !== 0 ? cube.accessories : null;
            res.render('details.hbs', { cube, accessories })
        })
        .catch(next);

}

function notFound(req, res) {
    res.render('404.hbs')
}

module.exports = {
    index,
    about,
    getCreate,
    postCreate,
    details,
    notFound
}