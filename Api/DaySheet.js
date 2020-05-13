const express = require('express');
const daySheet = require('../DB/DaySheet');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const DaySheet = await daySheet.find();
        res.json(DaySheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            daySheetID,
            billableHours,
            day,
            date,
            notes,
            timeOffHour,
            totalHours,
            workHours
        } = req.body;
        const DaySheet = new daySheet({
            daySheetID: daySheetID,
            billableHours: billableHours,
            day: day,
            date: date,
            notes: notes,
            timeOffHour: timeOffHour,
            totalHours: totalHours,
            workHours: workHours
        })
        await DaySheet.save();
        res.json(DaySheet);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:daySheetID', async (req, res) => {
    try {
        const removedDaySheet = await daySheet.remove({
            _id: req.params.daySheetID
        })
        res.json(removedDaySheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:daySheetID', async (req, res) => {
    try {
        const updatedDaySheet = await daySheet.updateOne({
            _id: req.params.daySheetID
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedDaySheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;