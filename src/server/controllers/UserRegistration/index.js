const bcrypt = require('bcrypt');
const _get = require('lodash/get');
const UsersModel = require('../../db/models/UsersModel/index');
const {
    genericError,
    genericResponseSender,
    status
} = require('../../utils');
const { mapContactDetails } = require('../UserProfileUpdate/mappers');

// Need to handle mongoDB Errors
const userRegistrationController = (req, res) => {
    const saltRounds = Number(process.env.SALT || 10);

    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
            return genericError(res, err);
        }

        const body = _get(req, 'body', {});
        const { password } = body;

        bcrypt.hash(password, salt, async function (err, hash) {
            if (err) {
                return genericError(res, err);
            }

            try {
                const newUser = new UsersModel({
                    basicDetails: {
                        ...body,
                        mobileNumber: mapContactDetails({ number: body.mobileNumber }),
                        password: hash,
                        confirmPassword: hash
                    }
                });
                
                newUser.save((err, response) => {
                    if (err) {
                        console.error('error: ', body, err);
                        return genericError(res, err);
                    }

                    genericResponseSender(res, { status: status.CREATED, response: { message: `Created ${[response].length} record....` } });
                });
            } catch (error) {
                return genericError(res, error);
            }
        });
    });
}


module.exports = {
    userRegistrationController
};