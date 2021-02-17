const express = require('express');
const router = express.Router();
const Meme = require('../models/Meme');

/*  /memes endpoints */


// REST api to respond to GET req , responds with 100 latest memes if successful.
router.get('/', async (req, res) => {
    try {
        const memes = await Meme.find().limit(100).sort({ _id: -1 });
        res.status(200).json(memes);
    } catch (err) {
        res.status(500).type("txt").send("SERVER ERROR");
    }
});


// REST api to respond to Post req , responds with id of posted meme if successful.
router.post('/', async (req, res) => {

    try {
        //handling the duplicate post req. returning 409, server conflict
        let exists = await Meme.exists({ name: req.body.name, caption: req.body.caption, url: req.body.url });
        if (exists) return res.status(409).type("txt").send("DUPLICATE");

        const meme = new Meme({
            name: req.body.name,
            caption: req.body.caption,
            url: req.body.url
        });
        let saved = await meme.save();
        res.status(201).json({ id: saved._id });
    } catch (err) {
        // will give a validation "not acceptable" error
        res.status(406).type("txt").send(err.message);
    }
});


// REST api to respond to GET req on /memes/:id , responds with specific meme acc to id if successful.
router.get('/:id', async (req, res) => {
    try {
        let response = await Meme.findById(req.params.id);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).type("txt").send(err.message);
    }
});

// REST api to respond to PATCH req , responds with 200 status if successful.
router.patch('/:id', async (req, res) => {
    try {
        // can update either of id or url but won't update name and other feild are not there.
        if (req.body.name !== undefined) return res.status(405).type("txt").send("name change not allowed");
        let response = await Meme.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true, useFindAndModify: false }
        );
        res.sendStatus(200);
    } catch (err) {
        res.status(404).type("txt").send('NOT FOUND');
    }
});

// REST api to respond to DELETE req , responds with 200 status if successful
router.delete('/:id', async (req, res) => {
    try {
        let response = await Meme.deleteOne({ _id: req.params.id });
        res.sendStatus(200);
    } catch (err) {
        res.status(404).type("txt").send('NOT FOUND');
    }
});




module.exports = router;
