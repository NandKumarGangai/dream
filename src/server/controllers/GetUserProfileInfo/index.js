const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/User.model_old');
const { unMapUserInfo } = require('./unmappers/unmapUserInfo');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status
} = require('../../utils');

const getUserProfileInfoController = (req, res) => {
    const email = _get(req, 'body.userInfo.email') || _get(req, 'body.email');

    return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        } else {
            UsersModel.findOne({ 'basicDetails.email': email }).then(result => {
                console.log('result: ', email, result);

                if (result) {
                    const response = unMapUserInfo(result);

                    return genericResponseSender(res, { status: status.SUCCESS, response });
                } else {
                    return genericError(res);
                }
            });
        }
    });
};

module.exports = {
    getUserProfileInfoController
}