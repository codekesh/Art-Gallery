const mongoose = require("mongoose");
const validator = require("validator");

const sketchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sketcher_name: {
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

const Sketches = new mongoose.model('Sketches', sketchSchema)

module.exports = Sketches