const mongoose = require("mongoose");
const validator = require("validator");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    author_name: {
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

const Books = new mongoose.model('Books', bookSchema)

module.exports = Books