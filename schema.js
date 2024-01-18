const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: [],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: [],
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    silhouette: {
        type: String,
        required: true,
    },
    released: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
});

const Sneaker = mongoose.model('sneaker', sneakerSchema);

module.exports = Sneaker;
