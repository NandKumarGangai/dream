const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/UsersModel');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status
} = require('../../utils');
const {
    unMapBasicDetails,
    unMapLifeStyleDetails,
    unMapReligiousDetails,
    unMapEducationAndCareer,
    unMapFamilyDetails
} = require('../UserProfileUpdate/mappers');

const getUserProfileInfoController = (req, res) => {
    const email = _get(req, 'body.userInfo.email') || _get(req, 'body.email');

    return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        }

        if (authData.data !== email) {
            return authorizationError(res);
        }


        UsersModel.findOne({ 'basicDetails.email': email }).then(result => {
            if (result) {
                const mappedResponse = {
                    ...unMapBasicDetails(result.basicDetails),
                    ...unMapLifeStyleDetails(result.lifeStyleDetails),
                    ...unMapReligiousDetails(result.religiousDetails),
                    ...unMapEducationAndCareer(result.educationAndCareer),
                    ...unMapFamilyDetails(result.familyDetails)
                };

                return genericResponseSender(res, { status: status.SUCCESS, response: mappedResponse });
            } else {
                return genericError(res);
            }
        });

    });
};

module.exports = {
    getUserProfileInfoController
}

// Added dummy lines for dry commit