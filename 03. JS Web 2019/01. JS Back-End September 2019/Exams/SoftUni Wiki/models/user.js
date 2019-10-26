const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    username : {
        type : mongoose.SchemaTypes.String,
        required : [true, 'Username is required!'],
        unique : [true, 'Username must be unique!']
    },
    password : {
        type :  mongoose.SchemaTypes.String,
        required : [true, 'Password is required!']
    },
    articles : [{
        type:mongoose.SchemaTypes.ObjectId,
        ref : 'Article'
    }]
})

userSchema.methods = {
    comparePasswords : function (enteredPassword){
        const pass = this.password
        return bcrypt.compare(enteredPassword, pass);
    }
}

userSchema.pre('save', function(next){
    if(this.isModified('password')){
        bcrypt.genSalt(saltRounds, (err, salt) =>{
            if (err){
                next(err); return;
            }
            bcrypt.hash(this.password, salt, (err, hash) =>{
                if (err) {
                    next(err); return;
                }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
})


module.exports = mongoose.model('User', userSchema);