const mongoose = require('mongoose');

const vendor = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    primaryEmail: {
        type: String
    },
    secondaryEmail: {
        type: String
    },
    jobCode: {
        type: String
    },
    jobTitle: {
        type: String
    },
    projectId: {
        type: String
    },
    projectName: {
        type: String
    }
});

module.exports = Vendor = mongoose.model('vendor', vendor)