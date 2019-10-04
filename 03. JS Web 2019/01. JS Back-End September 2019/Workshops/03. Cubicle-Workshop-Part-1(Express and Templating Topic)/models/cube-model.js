const fs = require('fs');
const path = require('path');
let db = require('../config/database');

class Cube {
   constructor(){
     
   }

    static insert (cube) {
        db.count += 1;
        cube.id = db.count;
        db.entries.push(cube);
        fs.writeFileSync(path.resolve('config/database.json'), JSON.stringify(db, null, 2));  
   }

   static getAllCubes(){
      return db.entries;
   }

   static findOne(id){
       const cube = db.entries.find(x => x.id === id);
       return cube;
   }
}

module.exports = Cube;