const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { BasicDetailsSchema } = require('./basicDetails');
const { LifeStyleDetailsSchema } = require('./lifeStyleDetails');
const { ReligiousDetailsSchema } = require('./religiousDetails');
const { EducationAndCareerSchema } = require('./educationAndCareer');
const { FamilyDetailsSchema } = require('./familyDetails');

const UserRegistraionSchema = new Schema({
    basicDetails: {
        type: BasicDetailsSchema,
        required: true
    },
    lifeStyleDetails: {
        type: LifeStyleDetailsSchema,
        required: false
    },
    religiousDetails: {
        type: ReligiousDetailsSchema,
        required: false
    },
    educationAndCareer: {
        type: EducationAndCareerSchema,
        required: false
    },
    familyDetails: {
        type: FamilyDetailsSchema,
        required: false
    }
})

module.exports = mongoose.model('UserRegistraion', UserRegistraionSchema, 'dev_collection');