const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
        validate: {
            validator: function (description) {
                return description.length >= 3 && description.length <= 200;
            },

            message: props => 'Description should be between 3 and 200 symbols inclusive!'
        }
    },

    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (url) {
                return /^(http|https?):\/\/+/.test(url)
            },
            message: props => `${props.value} is not a valid URL.`
        }
    },

    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [{ type: mongoose.Types.ObjectId, ref: 'Accessories' }]
});

module.exports = mongoose.model('Cube', cubeSchema);
