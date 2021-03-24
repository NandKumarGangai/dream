const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FamilyDetailsSchema = new Schema({
    fathersOccupation: {
        type: String,
        required: true
    },
    mothersOccupation: {
        type: String,
        required: true
    },
    noOfSisters: {
        type: String,
        required: true
    },
    noOfBrothers: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {
    FamilyDetailsSchema
}