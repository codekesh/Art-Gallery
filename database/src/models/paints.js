const mongoose = require("mongoose");
const validator = require("validator");

const paintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    painter_name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
})

const Paints = new mongoose.model('Paints', paintSchema)

module.exports = Paints