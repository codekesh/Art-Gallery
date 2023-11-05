const express = require('express');
const Sculptures = require('../models/sculptures');
const router = new express.Router();

router.post('/sculptures', async (req, res) => {
    try {
        const sculpture = new Sculptures(req.body);
        const createsculpture = await sculpture.save();
        res.status(201).send(createsculpture)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/sculptures', async (req, res) => {
    try {
        const sculpturesData = await Sculptures.find();
        res.status(201).send(sculpturesData)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/sculptures/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const sculptureData = await Sculptures.findById(_id);
        if (!sculptureData) {
            res.send(404).send();
        }
        else { res.status(201).send(sculptureData) }
    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/sculptures/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatasculpture = await Sculptures.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updatasculpture)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/sculptures/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletesculpture = await Sculptures.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deletesculpture)
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;