const express = require('express');
const counter = require('../DB/Counter');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const Counter = await counter.find();
        res.json(Counter)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            _id,
            seq
        } = req.body;
        const Counter = new counter({
            _id: _id,
            seq: seq
        })
        await Counter.save();
        res.json(Counter);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        const removedCounter = await counter.remove({
            _id: req.params._id
        })
        res.json(removedCounter)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:_id', async (req, res) => {
    try {
        const updatedCounter = await counter.updateOne({
            _id: req.params._id
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedCounter)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;