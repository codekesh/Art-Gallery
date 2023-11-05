const express = require('express');
const Pictures = require('../models/pictures');
const router = new express.Router();

router.post('/pictures', async (req, res) => {
    try {
        const picture = new Pictures(req.body);
        const createpicture = await picture.save();
        res.status(201).send(createpicture)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/pictures', async (req, res) => {
    try {
        const picturesData = await Pictures.find();
        res.status(201).send(picturesData)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get('/pictures/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const pictureData = await Pictures.findById(_id);
        if (!pictureData) {
            res.send(404).send();
        }
        else { res.status(201).send(pictureData) }
    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/pictures/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatapicture = await Pictures.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(updatapicture)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/pictures/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletepicture = await Pictures.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(400).send();
        }
        res.send(deletepicture)
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;