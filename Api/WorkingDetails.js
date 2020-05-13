const express = require('express');
const workingDetails = require('../DB/WorkingDetails');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const WorkingDetails = await workingDetails.find();
        res.json(WorkingDetails)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            workingDetailsID,
            totalWeekWorkHours,
            totalWeekBillableHours,
            totalWeekTimeOffHours,
            totalWeekHours,
            comments,
            status,
            daySheet
        } = req.body;
        const WorkingDetails = new workingDetails({
            workingDetailsID: workingDetailsID,
            totalWeekWorkHours: totalWeekWorkHours,
            totalWeekBillableHours: totalWeekBillableHours,
            totalWeekTimeOffHours: totalWeekTimeOffHours,
            totalWeekHours: totalWeekHours,
            comments: comments,
            status: status,
            daySheet: daySheet
        })
        await WorkingDetails.save();
        res.json(WorkingDetails);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:workingDetailsID', async (req, res) => {
    try {
        const removedWorkingDetails = await workingDetails.remove({
            _id: req.params.workingDetailsID
        })
        res.json(removedWorkingDetails)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:workingDetailsID', async (req, res) => {
    try {
        const updatedWorkingDetails = await workingDetails.updateOne({
            _id: req.params.workingDetailsID
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedWorkingDetails)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;