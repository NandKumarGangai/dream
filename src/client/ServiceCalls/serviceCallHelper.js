import axios from 'axios';
import _get from 'lodash/get';
import config from '../../config/default.json';
import { STORAGE } from '../Utils/storage';

const addAuthHeader = () => {
    const token = STORAGE.getToken();
    return token
        ? {
            'Authorization': `${token}`
        }
        : {};
};

const defaultHeaders = {
    'Content-Type': 'application/json',
    ...addAuthHeader()
};

const defaultMethod = 'post';

export const serviceCallPaths = {
    REGISTER_NEW_USER: _get(config, 'services.userRegistration.path', ''),
    USER_LOGIN: _get(config, 'services.userLogin.path', ''),
    UPDATE_USER_PROFILE: _get(config, 'services.updateUserProfile.path', ''),
    GET_USER_PROFILE: _get(config, 'services.getUserProfile.path', ''),
    GET_CANDIDATE_PROFILES: _get(config, 'services.getCandidateProfiles.path', ''),
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
console.info('Default Headers: ', defaultHeaders);

export const makeServiceCall = ({
    host = '',
    path,
    method = defaultMethod,
    body,
    headers = defaultHeaders
}) => {
    const modHeaders = {
        ...headers,
        ...addAuthHeader()
    }
    console.log('headers: ', modHeaders);
    return axios({
        method,
        url: `${host}${path}`,
        data: body,
        headers: modHeaders
    });
};