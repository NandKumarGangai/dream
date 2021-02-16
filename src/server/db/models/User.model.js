const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRegistraionSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        unique: true,
        min: 1,
        max: 99
    },
    lastName: {
        type: String,
        unique: true,
        min: 1,
        max: 99
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('UserRegistraion', UserRegistraionSchema, 'dev_collection');