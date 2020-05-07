const express = require('express');
const employee = require('../DB/Employee');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const Employee = await employee.find();
        res.json(Employee)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            employeeID,
            firstName,
            lastName,
            phoneNumber,
            primaryEmail,
            secondaryEmail,
            emailVerified,
            role,
            password,
            address,
            jobCode,
            jobTitle,
            endClient,
            startDate,
            endDate,
            VendorName,
            projectID,
            projectName,
            managerName,
            approverName,
            createdAt,
            updatedAt
        } = req.body;
        const Employee = new employee({
            employeeID: employeeID,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            primaryEmail: primaryEmail,
            secondaryEmail: secondaryEmail,
            emailVerified: emailVerified,
            role: role,
            password: password,
            address: address,
            jobCode: jobCode,
            jobTitle: jobTitle,
            endClient: endClient,
            startDate: startDate,
            endDate: endDate,
            VendorName: VendorName,
            projectID: projectID,
            projectName: projectName,
            managerName: managerName,
            approverName: approverName,
            createdAt: createdAt,
            updatedAt: updatedAt
        })
        await Employee.save();
        res.json(Employee);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:employeeID', async (req, res) => {
    try {
        const removedEmployee = await employee.remove({
            _id: req.params.employeeID
        })
        res.json(removedEmployee)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:employeeID', async (req, res) => {
    try {
        const updatedEmployee = await employee.updateOne({
            _id: req.params.employeeID
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedEmployee)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;