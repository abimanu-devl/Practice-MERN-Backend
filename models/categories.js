const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    type: {
        type: String,
        require: true,
        trim: true
    },
    kilometers: {
        type: Number,
        require: true
    },
    chargePerKm: {
        type: Number,
        require: true
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'vehicles'
    }],
});

const Category = mongoose.model('categories', categorySchema);
module.exports = Category;