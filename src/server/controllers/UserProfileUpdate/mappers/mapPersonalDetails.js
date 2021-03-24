
const mapContactDetails = ({ countryCode = '+91', number }) => ({
    countryCode,
    number
});

const mapPersonalDetails = ({
    firstName,
    lastName,
    email,
    mobileNumber,
    gender,
    dateOfBirth
} = {}) => ({
    firstName,
    lastName,
    email,
    mobileNumber: mapContactDetails({ number: mobileNumber }),
    gender,
    dateOfBirth
});

module.exports = {
    mapPersonalDetails,
    mapContactDetails
}