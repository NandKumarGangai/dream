const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationAndCareerSchema = new Schema({
    highestEducation: {
        type: String,
        required: true
    },
    educationDetails: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: false
    },
    companyType: {
        type: String,
        required: true
    },
    annualIncome: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {
    EducationAndCareerSchema
}