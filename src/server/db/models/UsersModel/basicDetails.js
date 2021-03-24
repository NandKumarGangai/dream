const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IsProfileUpdatedSchema = new Schema({
    isUpdated: {
        type: Boolean,
        default: false
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    }
});

const ContactNumberSchema = new Schema({
    countryCode: {
        type: String,
        required: false,
        default: '+91'
    },
    number: {
        type: String,
        required: true
    }
});

const BasicDetailsSchema = new Schema({
    profileFor: {
        type: String,
        required: true
    },
    name: {
        type: String,
        min: 1,
        max: 99,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        min: 1,
        max: 99,
        required: true
    },
    mobileNumber: {
        type: ContactNumberSchema,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        min: 8,
        max: 1024
    },
    confirmPassword: {
        type: String,
        required: true,
        select: false,
        min: 8,
        max: 1024
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isProfileUpdated: {
        type: IsProfileUpdatedSchema
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {
    BasicDetailsSchema
}