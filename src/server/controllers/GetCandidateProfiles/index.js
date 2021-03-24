const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/User.model_old');
const {
    authorizationError,
    genericResponseSender,
    status
} = require('../../utils');

const getCandidateProfilesController = (req, res) => {

    return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        } else {
            console.log('AuthData: ', authData, req.body)
            UsersModel.find({ email: { $ne: req.body.email }}).then(results => {
                const params = {
                    status: status.SUCCESS,
                    response: {
                        users: results,
                        length: results.length
                    }
                }
                return genericResponseSender(res, params);
            });
        }
    });
}

module.exports = {
    getCandidateProfilesController
}