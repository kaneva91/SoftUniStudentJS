let db = require('../config/database');
const fs = require('fs');
const path = require('path');


function addCube(newCube) {
    let newData = db;
    newData.count += 1;
    newCube.id = newData.count;
    newData.entries = [...newData.entries, newCube];

    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve('config/database.json'), JSON.stringify(newData, null, 2), (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(newData);
        })

    });
}


function getCubes(search = '', from = 1, to = 6) {
    let cubes = db.entries;
    if (!!search) {
        console.log('from models');
        console.log(from, to);
        cubes = cubes.filter(cube => cube.name === search)
            .filter(cube => {
                return (+cube.difficultyLevel >= from && +cube.difficultyLevel <= to)
            });
    }
    return Promise.resolve(cubes);
}


function getOne(id) {
    const cube = db.entries.find(cube => cube.id === id);
    return Promise.resolve(cube);
}

module.exports = {
    addCube,
    getCubes,
    getOne
}