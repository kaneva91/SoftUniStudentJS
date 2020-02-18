const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },

    imageURL: {
        type: String,
        required: true
    },

    description: {
        type: String,
        require: true
    },

    category: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});





module.exports = new Model('Product', productSchema);