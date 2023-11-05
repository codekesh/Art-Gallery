const mongoose = require("mongoose");
const validator = require("validator");

const sculptureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sculptor_name: {
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

const Scultpures = new mongoose.model('Scultpures', sculptureSchema)

module.exports = Scultpures