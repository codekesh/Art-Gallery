const mongoose = require("mongoose");
const validator = require("validator");

const pictureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    photographer_name: {
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

const Pictures = new mongoose.model('Pictures', pictureSchema)

module.exports = Pictures