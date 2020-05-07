const express = require('express');

const vendor = require('../DB/Vendor');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const Vendors = await vendor.find();
        res.json(Vendors)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    const {
        firstName,
        lastName,
        phoneNumber,
        primaryEmail,
        secondaryEmail,
        jobCode,
        jobTitle,
        projectId,
        projectName
    } = req.body;
    let vendor = {};
    vendor.firstName = firstName;
    vendor.lastName = lastName;
    vendor.phoneNumber = phoneNumber;
    vendor.primaryEmail = primaryEmail;
    vendor.secondaryEmail = secondaryEmail;
    vendor.jobCode = jobCode;
    vendor.jobTitle = jobTitle;
    vendor.projectId = projectId;
    vendor.projectName = projectName;
    let vendorModel = new Vendor(vendor);
    await vendorModel.save();
    res.json(vendorModel)

})

router.delete('/:vendorId', async (req, res) => {
    try {
        const removedVendor = await vendor.remove({
            _id: req.params.vendorId
        })
        res.json(removedVendor);
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/:vendorId', async (req, res) => {
    try {
        const updatedVendor = await vendor.updateOne({
            _id: req.params.vendorId
        }, {
            $set: {
                firstName: req.body.firstName
            }
        })
        res.json(updatedVendor);
    } catch (err) {
        res.json({
            message: err
        })
    }
})



module.exports = router;