const bcrypt = require('bcrypt');
const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const UsersModel = require('../../db/models/UsersModel');
const {
    genericError,
    genericResponseSender,
    status
} = require('../../utils');
const { unMapBasicDetails } = require('../../mappers/BasicDetails/umMap');
const userLoginController = (req, res) => {

    const { email, password } = _get(req, 'body', {});

    return UsersModel.findOne({ "basicDetails.email": email }).select('+basicDetails.password').then(result => {
        if (result) {
            const hash = _get(result, 'basicDetails.password');

            bcrypt.compare(password, hash, function (err, check) {
                console.log('check: ', result);
                if (check) {
                    const token = jwt.sign(
                        {
                            data: req.body.email
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: 60 * 60
                        }
                    );

                    const response = {
                        token,
                        user: unMapBasicDetails(result)
                    }
                    return genericResponseSender(res, { status: status.SUCCESS, response });
                }
                return genericError(res, err);
            });
        } else {
            return genericError(res);
        }
    });
};

module.exports = {
    userLoginController
}