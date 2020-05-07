const mongoose = require('mongoose');

const employee = new mongoose.Schema({

    employeeID: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    primaryEmail: String,
    secondaryEmail: String,
    emailVerified: Boolean,
    role: String,
    password: String,
    address: String,
    jobCode: String,
    jobTitle: String,
    endClient: String,
    startDate: Date,
    endDate: Date,
    VendorName: String,
    projectID: String,
    projectName: String,
    managerName: String,
    approverName: String,
    createdAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    updatedAt: {
        type: Number,
        default: (new Date()).getTime()
    }
})

module.exports = mongoose.model('Employee', employee)