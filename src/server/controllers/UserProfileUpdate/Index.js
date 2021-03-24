const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/UsersModel');
const {
    mapLifeStyleDetails,
    mapReligiousDetails,
    mapEducationAndCareer,
    mapFamilyDetails
} = require('./mappers');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status
} = require('../../utils');
const { unMapUserInfo } = require('../GetUserProfileInfo/unmappers/unmapUserInfo');

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

        return updatedResponse
            ? genericResponseSender(res, { status: status.SUCCESS, response: updatedResponse })
            : genericError(res);
    });
};

module.exports = {
    userProfileUpdateController
}