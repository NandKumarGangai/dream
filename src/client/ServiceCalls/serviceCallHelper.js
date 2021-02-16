import axios from 'axios';
import _get from 'lodash/get';
import config from '../../config/default.json';

const defaultHeaders = {
    'Content-Type': 'application/json'
};

const defaultMethod = 'post';

export const serviceCallPaths = {
    REGISTER_NEW_USER: _get(config, 'services.userRegistration.path', ''),
    USER_LOGIN: _get(config, 'services.userLogin.path', '')
};

export const convertToJson = response => {
    try {
        return JSON.parse(JSON.stringify(response));
    } catch (error) {
        throw new Error({
            success: false,
            cause: error
        });
    }
};

export const makeServiceCall = ({
    host = '',
    path,
    method = defaultMethod,
    body,
    headers = defaultHeaders
}) => axios({
    method,
    url: `${host}${path}`,
    data: body,
    headers
});