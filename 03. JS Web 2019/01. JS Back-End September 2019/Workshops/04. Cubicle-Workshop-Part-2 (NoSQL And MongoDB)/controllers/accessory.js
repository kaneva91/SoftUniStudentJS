accessoryModel = require('../models/accessories');
cubeModel = require('../models/cube');

function getCreate(req, res) {
    res.render('createAccessory.hbs');
}


function postCreate(req, res) {
    const { name, description, imageUrl } = req.body;

    if (!!name && !!description && !!imageUrl) {
        accessoryModel.create({ name, description, imageUrl })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.redirect('/create/accessory');
                return console.log(err);
            })
    }
    else {
        res.redirect('/');
    }
}


function getAttach(req, res, next) {
    const cubeId = req.params.id;

    cubeModel.findById(cubeId)
        .then(cube =>
            Promise.all([cube, accessoryModel.find({ cubes: { $nin: cubeId } })]))
        .then(([cube, fiteredAccessories]) =>
            res.render('attachAccessory.hbs', { cube, accessories: fiteredAccessories.length > 0 ? fiteredAccessories : null }))
        .catch(next);
}


function postAttach(req, res, next) {
    cubeId = req.params.id;
    accessoryId = req.body.accessory;

    Promise.all([
        cubeModel.update({ _id: cubeId }, { $push: { accessories: accessoryId } }),
        accessoryModel.update({ _id: accessoryId }, { $push: { cubes: cubeId } })
    ])
        .then(() => res.redirect('/'))
        .catch(next);
}


module.exports = {
    getCreate,
    postCreate,
    getAttach,
    postAttach
}