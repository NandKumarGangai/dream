const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/UsersModel');
const {
    authorizationError,
    genericResponseSender,
    status,
    genericError
} = require('../../utils');

const getCandidateProfilesController = (req, res) => {

    return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        }
        const email = _get(req, 'body.email');
        if (authData.data !== email) {
            return authorizationError(res);
        }
        
        UsersModel.find({ 'basicDetails.email': { $ne: email } })
            .then(results => {
                const params = {
                    status: status.SUCCESS,
                    response: {
                        users: results,
                        length: results.length
                    }
                }
                return genericResponseSender(res, params);
            })
            .catch(err => genericError(res, err));
    });
}

module.exports = {
    getCandidateProfilesController
}