const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/UsersModel');
const {
    mapLifeStyleDetails,
    mapReligiousDetails,
    mapEducationAndCareer,
    mapFamilyDetails,
    unMapBasicDetails,
    unMapLifeStyleDetails,
    unMapReligiousDetails,
    unMapEducationAndCareer,
    unMapFamilyDetails
} = require('./mappers');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status
} = require('../../utils');

const userProfileUpdateController = (req, res) => {
    const email = _get(req, 'body.userInfo.email');

    return jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        }

        if (authData.data !== email) {
            return authorizationError(res);
        }

        const output = {};
        const profileData = _get(req, 'body.profileData', {});

        mapLifeStyleDetails(output, profileData);
        mapReligiousDetails(output, profileData);
        mapEducationAndCareer(output, profileData);
        mapFamilyDetails(output, profileData);

        const updatedResponse = await UsersModel.findOneAndUpdate(
            { 'basicDetails.email': email },
            { ...output },
            { returnNewDocument: true }
        );
        console.log(updatedResponse)
        const mappedResponse = {
            ...unMapBasicDetails(updatedResponse.basicDetails),
            ...unMapLifeStyleDetails(updatedResponse.lifeStyleDetails),
            ...unMapReligiousDetails(updatedResponse.religiousDetails),
            ...unMapEducationAndCareer(updatedResponse.educationAndCareer),
            ...unMapFamilyDetails(updatedResponse.familyDetails)
        };
        
        return updatedResponse
            ? genericResponseSender(res, { status: status.SUCCESS, response: mappedResponse })
            : genericError(res);
    });
};

module.exports = {
    userProfileUpdateController
}