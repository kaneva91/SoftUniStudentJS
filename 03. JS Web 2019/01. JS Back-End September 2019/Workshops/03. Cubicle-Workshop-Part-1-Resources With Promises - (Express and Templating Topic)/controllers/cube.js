const cubeModel = require('../models/cube');

function index(req, res) {
    let { from, to, search } = req.query;
    let result;

    if (!!search) {
        search = search.toLowerCase();

        from = !!from ? +from : 1;
        to = !!to ? +from : 6;

        result = cubeModel.getCubes(search, from, to);
    }
    else {
        result = cubeModel.getCubes();
    }

    result.then(cubes => res.render('index.hbs', { cubes }));
}


function about(req, res) {
    res.render('about.hbs');
}


function getCreate(req, res) {
    res.render('create.hbs');
}


function postCreate(req, res) {
    let { name, description, imageUrl, difficultyLevel } = req.body;

    if (!!name && !!description && !!imageUrl && !!difficultyLevel) {
        name = name.toLowerCase();
        cubeModel.addCube({ name, description, imageUrl, difficultyLevel })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.render('create.hbs');
                console.log(err)
            });
    }
    else {    // if some of the fields are empty, redirects to the "/create'" page again to avoid writing incorrect data in the database 
        res.redirect('/create');
    }
}


function details(req, res) {
    const id = +req.params.id;
    cubeModel.getOne(id)
        .then(cube => res.render('details.hbs', { cube }));

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