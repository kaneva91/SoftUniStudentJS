const mongoose = require('mongoose');

const tokenBlacklist = new mongoose.Schema({
  token : String
});


module.exports = mongoose.model('tokenBlacklist', tokenBlacklist);
