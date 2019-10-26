const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
    title: {
        type: mongoose.SchemaTypes.String,
        required: [true, 'Title is required!'],
        minlength: [5, ' Title should be at least 5 symbols long!']
    },
    content: {
        type: mongoose.SchemaTypes.String,
        required: [true, 'Description is required!'],
        minlength: [20, ' Description should be at least 20 symbols long!'],
    },
    creationDate: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now
    },

    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Article', articleSchema);