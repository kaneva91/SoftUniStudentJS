const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const categorySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    imageURL: {
        type: String,
        required: true
    }
});


module.exports = new Model('Category', categorySchema);