const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true
    },
    password :{
        type: String,
        required : true
    }
});

userSchema.methods = {
  matchPassword : function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
  }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) { next(err); return; }
        bcrypt.hash(this.password, salt, (err, hash) => {
          if (err) { next(err); return; }
          this.password = hash;
          next();
        });
      });
      return;
    }
    next();
  });

module.exports = mongoose.model('User', userSchema);
