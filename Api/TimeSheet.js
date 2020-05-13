const express = require('express');
const timeSheet = require('../DB/TimeSheet');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const TimeSheet = await timeSheet.find();
        res.json(TimeSheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
})


router.post('/', async (req, res) => {
    try {
        const {
                timeSheetId,
                selectWeek,
                jobTitle,
                endClient,
                approver,
                startDate,
                endDate,
                workingDetails,
                projectId,
                employeeId,
                submissionStatus,
                createdAt, 
                updatedAt
                } = req.body;
        const TimeSheet = new timeSheet({
            timeSheetId: timeSheetId,
            selectWeek: selectWeek,
            jobTitle: jobTitle,
            endClient: endClient,
            approver: approver,
            startDate: startDate,
            endDate: endDate,
            workingDetails: workingDetails,
            projectId: projectId,
            employeeId: employeeId,
            submissionStatus: submissionStatus,
            createdAt: createdAt,
            updatedAt: updatedAt
        })
        await TimeSheet.save();
        res.json(TimeSheet);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:timesSheetId', async (req, res) => {
    try {
        const removedTimeSheet = await timeSheet.remove({
            _id: req.params.timeSheetId
        })
        res.json(removedTimeSheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:ti', async (req, res) => {
    try {
        const updatedTimeSheet = await timeSheet.updateOne({
            _id: req.params.timeSheetId
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedTimeSheet)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;