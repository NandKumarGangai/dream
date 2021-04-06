const { mapAddressDetails } = require('./mapAddressDetails');
const { mapPersonalDetails, mapContactDetails } = require('./mapPersonalDetails');
const {
    mapLifeStyleDetails,
    mapReligiousDetails,
    mapEducationAndCareer,
    mapFamilyDetails
} = require('./mapProfileDetails');
const {
    unMapBasicDetails,
    unMapLifeStyleDetails,
    unMapReligiousDetails,
    unMapEducationAndCareer,
    unMapFamilyDetails
} = require('./unMapProfileDetails');

module.exports = {
    mapAddressDetails,
    mapPersonalDetails,
    mapContactDetails,

    mapLifeStyleDetails,
    mapReligiousDetails,
    mapEducationAndCareer,
    mapFamilyDetails,

    unMapBasicDetails,
    unMapLifeStyleDetails,
    unMapReligiousDetails,
    unMapEducationAndCareer,
    unMapFamilyDetails
}