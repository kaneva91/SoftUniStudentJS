const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const earingsSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    url :{
        type: String,
        required : true
    },

    price :{
        type: Number,
        required : true
    },
    description : {
        type: String,
        required : true
    }
});

module.exports = new Model('Earings', earingsSchema);