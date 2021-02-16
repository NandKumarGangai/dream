const bcrypt = require('bcrypt');
const express = require('express');
const _get = require('lodash/get');
const jwt = require('jsonwebtoken');

const Register = require('../db/models/User.model');
const { genericError, genericResponseSender, status } = require('../utils');

const Router = express.Router();

Router.post('/register-user', (req, res) => {
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
                const newUser = new Register({
                    ...body,
                    password: hash,
                    confirmPassword: hash
                });
                newUser.save((err, response) => {
                    if (err) {
                        console.error('error: ', err);
                        return genericError(res, err);
                    }

                    genericResponseSender(res, { status: status.CREATED, response: { message: `Created ${[response].length} record....` } });
                });
            } catch (error) {
                return genericError(res, error);
            }
        });
    });
});


Router.post('/user-login', (req, res) => {

    const { email, password } = _get(req, 'body', {});

    return Register.findOne({ email }).then(result => {
        if (result) {
            const hash = _get(result, 'password');
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
                    const { firstName, lastName, email } = result;
                    response = {
                        token,
                        user: {
                            firstName,
                            lastName,
                            email
                        }
                    }
                    return genericResponseSender(res, { status: status.SUCCESS, response });
                }
                return genericError(res, err);
            });
        } else {
            return genericError(res);
        }
    });
});

module.exports = Router;