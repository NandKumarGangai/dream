const _get = require('lodash/get');

const unMapUserInfo = ({
    isProfileUpdated,
    profileInfo,
} = {}) => ({
    userProfile: {
        firstName: _get(profileInfo, 'personalDetails.firstName'),
        lastName: _get(profileInfo, 'personalDetails.lastName'),
        email: _get(profileInfo, 'personalDetails.email'),
        mobileNumber: _get(profileInfo, 'personalDetails.mobileNumber.number'),
        gender: _get(profileInfo, 'personalDetails.gender'),
        dateOfBirth: _get(profileInfo, 'personalDetails.dateOfBirth', null),
        addressLine1: _get(profileInfo, 'addressDetails.addressLine1'),
        addressLine2: _get(profileInfo, 'addressDetails.addressLine2'),
        addressLine3: _get(profileInfo, 'addressDetails.addressLine3'),
        city: _get(profileInfo, 'addressDetails.city'),
        district: _get(profileInfo, 'addressDetails.district'),
        state: _get(profileInfo, 'addressDetails.state'),
        pincode: _get(profileInfo, 'addressDetails.pincode')
    },
    isProfileUpdated
});

module.exports = {
    unMapUserInfo
}