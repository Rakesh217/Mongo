const express = require('express');
const listOfEmployees = require('../DB/ListOfEmployees');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ListOfEmployees = await listOfEmployees.find();
        res.json(ListOfEmployees)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            listOfEmployeesID,
            employeeId,
            employeeName,
            isTimeSheetActive
        } = req.body;
        const ListOfEmployees = new listOfEmployees({
            listOfEmployeesID: listOfEmployeesID,
            employeeId: employeeId,
            employeeName: employeeName,
            isTimeSheetActive: isTimeSheetActive
        })
        await ListOfEmployees.save();
        res.json(ListOfEmployees);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:listOfEmployeesID', async (req, res) => {
    try {
        const removedListOfEmployees = await listOfEmployees.remove({
            _id: req.params.listOfEmployeesID
        })
        res.json(removedListOfEmployees)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:ti', async (req, res) => {
    try {
        const updatedListOfEmployees = await listOfEmployees.updateOne({
            _id: req.params.listOfEmployeesID
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedListOfEmployees)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;