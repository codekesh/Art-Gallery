const express = require('express');
const Sketches = require('../models/sketches');
const router = new express.Router();

router.post('/sketches', async (req, res) => {
    try {
        const sketch = new Sketches(req.body);
        const createsketch = await sketch.save();
        res.status(201).send(createsketch)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/sketches', async (req, res) => {
    try {
        const sketchesData = await Sketches.find();
        res.status(201).send(sketchesData)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/sketches/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const sketchData = await Sketches.findById(_id);
        if (!sketchData) {
            res.send(404).send();
        }
        else { res.status(201).send(sketchData) }
    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/sketches/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatasketch = await Sketches.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updatasketch)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/sketches/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletesketch = await Sketches.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deletesketch)
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;