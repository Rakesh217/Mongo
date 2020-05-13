const mongoose = require('mongoose');

const workingDetails = new mongoose.Schema({
    workingDetailsID: Number,
    totalWeekWorkHours: Number,
    totalWeekBillableHours: Number,
    totalWeekTimeOffHours: Number,
    totalWeekHours: Number,
    comments: String,
    status: Boolean,
    daySheet: Array
})

module.exports = mongoose.model('WorkingDetails', workingDetails)