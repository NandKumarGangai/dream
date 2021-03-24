const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressDetailsSchema = new Schema({
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    addressLine3: {
        type: String
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
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

const PersonalDetailsSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: ContactNumberSchema,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: false
    }
});

const ProfileSchema = new Schema({
    personalDetails: {
        type: PersonalDetailsSchema
    },
    addressDetails: {
        type: AddressDetailsSchema
    },
    // educationDetails: {
    //     type: EducationalDetailsSchema
    // },
    // employmentDetailsSchema: {
    //     type: EmploymentDetailsSchema
    // }
});

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


const UserRegistraionSchema = new Schema({
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
    profileInfo: {
        type: ProfileSchema
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('UserRegistraionOld', UserRegistraionSchema, 'dev_collection');