const mongoose = require('mongoose');

const listOfEmployees = new mongoose.Schema({
    listOfEmployeesID: Number,
    employeeId: Number,
    employeeName: String,
    isTimeSheetActive: Boolean
})

module.exports = mongoose.model('ListOfEmployees', listOfEmployees)