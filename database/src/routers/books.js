const express = require('express');
const Books = require('../models/books');
const router = new express.Router();

router.post('/books', async (req, res) => {
    try {
        const book = new Books(req.body);
        const createBook = await book.save();
        res.status(201).send(createBook)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/books', async (req, res) => {
    try {
        const booksData = await Books.find();
        res.status(201).send(booksData)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/books/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const bookData = await Books.findById(_id);
        if (!bookData) {
            res.send(404).send();
        }
        else { res.status(201).send(bookData) }
    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/books/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updataBook = await Books.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updataBook)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/books/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteBook = await Books.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deleteBook)
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;