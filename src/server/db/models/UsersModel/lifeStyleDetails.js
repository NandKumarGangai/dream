const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LifeStyleDetailsSchema = new Schema({
    age: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: false
    },
    bodyType: {
        type: String,
        required: false
    },
    physicalStatus: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    motherTongue: {
        type: String,
        required: false
    },
    drink: {
        type: String,
        required: true
    },
    diet: {
        type: String,
        required: true
    },
    smoke: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {
    LifeStyleDetailsSchema
}