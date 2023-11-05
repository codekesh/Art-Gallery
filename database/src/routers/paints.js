const express = require('express');
const Paints = require('../models/paints');
const router = new express.Router();

router.post('/paints', async (req, res) => {
    try {
        const paint = new Paints(req.body);
        const createpaint = await paint.save();
        res.status(201).send(createpaint)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/paints', async (req, res) => {
    try {
        const paintsData = await Paints.find();
        res.status(201).send(paintsData)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/paints/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const paintData = await Paints.findById(_id);
        if (!paintData) {
            res.send(404).send();
        }
        else { res.status(201).send(paintData) }
    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/paints/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatapaint = await Paints.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updatapaint)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/paints/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletepaint = await Paints.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deletepaint)
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;