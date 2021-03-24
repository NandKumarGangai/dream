import * as yup from 'yup';

export const validationSchema = yup.object({
    age: yup.string('Enter your age in years').matches(/^[0-9]+$/, "Must be only digits").required('Age is required'),
    height: yup.string('Enter your height in CM').matches(/^[0-9]+$/, "Must be only digits").required('Height is required'),
    weight: yup.string('Enter your weight in KG').matches(/^[0-9]+$/, "Must be only digits").required('Weight is required'),
    bloodGroup: yup.string('Please select your blood group'),
    bodyType: yup.string('Please select your body type'),
    physicalStatus: yup.string('Please select....').required('Physical status is required'),
    maritalStatus: yup.string('Please select marital status').required('Marital status is required'),
    motherTongue: yup.string('Enter your mother tongue'),
    drink: yup.string('Please select....').required('Drink is required'),
    diet: yup.string('Please select....').required('Diet required'),
    smoke: yup.string('Please select....').required('Smoke is required'),

    dateAndTimeOfBirth: yup.date('Please select your date and tim of birth').required('Date and time of birth is required').nullable('Please select date and time of birth'),
    placeOfBirth: yup.string('Enter your place of birth').required('Place of birth is required'),
    caste: yup.string('Enter your caste').required('Caste is required'),
    subCaste: yup.string('Enter your sub caste').required('Sub caste is required'),
    rassi: yup.string('Enter your Rassi').required('Rassi is required'),
    manglik: yup.string('Please select....').required('Manglik is required'),

    highestEducation: yup.string('Please select highest education').required('Highest education is required'),
    educationDetails: yup.string('Enter your educational details'),
    occupation: yup.string('Enter your educational details').required('Occupation is required'),
    company: yup.string('Enter your company name'),
    companyType: yup.string('Please select type of company/job').required('Company/job type is required'),
    annualIncome: yup.string('Enter your annual income').required('is required'),

    fathersOccupation: yup.string('Enter father\'s occupation').required('Father\'s occupation is required'),
    mothersOccupation: yup.string('Enter mother\'s occupation').required('Mother\' occupation is required'),
    noOfSisters: yup.string('Enter number of sisters').required('Number of sisters is required'),
    noOfBrothers: yup.string('Enter number of brothers').required('Number of brothers is required'),
});


/*
export const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .required('Email is required'),
    lastName: yup
        .string('Enter your last name')
        .required('Email is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    mobileNumber: yup.string('Enter your mobile number')
        .required('Mobile number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
    gender: yup
        .string('Please select value')
        .required('Gender is required'),
    dateOfBirth: yup
        .date('Please select your date of birth')
        .required('Date of birth is required')
        .nullable('Please select DOB'),
    addressLine1: yup
        .string('Enter your address')
        .required('Address line 1 is required')
        .max(50),
    addressLine2: yup
        .string('Enter your address')
        .max(50),
    addressLine3: yup
        .string('Enter your address')
        .max(50),
    city: yup
        .string('Enter your city')
        .required('City is required')
        .max(25),
    district: yup
        .string('Enter your district')
        .required('District is required')
        .max(25),
    state: yup
        .string('Enter your state')
        .required('State is required')
        .max(25),
    pincode: yup
        .string('Enter your pincode')
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('Pincode is required')
        .min(6)
        .max(6)
}); */