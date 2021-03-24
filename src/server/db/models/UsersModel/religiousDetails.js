const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReligiousDetailsSchema = new Schema({
    dateAndTimeOfBirth: {
        type: String,
        required: true
    },
    placeOfBirth: {
        type: String,
        required: true
    },
    caste: {
        type: String,
        required: true
    },
    subCaste: {
        type: String,
        required: true
    },
    rassi: {
        type: String,
        required: true
    },
    manglik: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {
    ReligiousDetailsSchema
}