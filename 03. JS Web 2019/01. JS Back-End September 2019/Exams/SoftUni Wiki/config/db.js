// const mongoose = require('mongoose');

// module.exports = ()=> {
//      return mongoose.connect('mongodb://localhost:27017/exam');
// }

  
const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect(config.dbURL);
};