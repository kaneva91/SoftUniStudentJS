const mongoose = require('mongoose');

const accessoriesSchema = new mongoose.Schema({
    name: {type : String,
        required: true    
    },

    imageUrl : {
        type : String,
        required : true,
        validate : {
            validator : function(url){
                return /^(http|https?):\/\/+/.test(url);
            }
        },
        messsage: props => `${props.value} is not a valid URL.`
    },

    description: {
        type: String,
        required: true,
        validate: {
            validator: function(description){
                return description.length >= 3 && description.length <= 200
            }
        },
        message: props => 'The description must be between 3 and 200 characters inclusive.'
    },

    cubes: [{ type: mongoose.Types.ObjectId, ref: 'Cube' }]
});

module.exports = mongoose.model('Accessories', accessoriesSchema);