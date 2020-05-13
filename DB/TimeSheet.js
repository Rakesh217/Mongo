const mongoose = require('mongoose');

const timeSheet = new mongoose.Schema({
    timeSheetId: Number,
    selectWeek: String,
    jobTitle: String,
    endClient: String,
    approver: String,
    startDate: Date,
    endDate: Date,
    workingDetails: String,
    projectId: Number,
    employeeId: Number,
    submissionStatus: Number,
    createdAt: {
        type: Number,
        default: (new Date()).getTime()
    },
    updatedAt: {
        type: Number,
        default: (new Date()).getTime()
    }
})

module.exports = mongoose.model('TimeSheet', timeSheet)