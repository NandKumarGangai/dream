import _get from 'lodash/get';
import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelper';
import {
    navigateToLandingPage,
    navigateToErrorPage
} from '../navigations';
import { STORAGE } from '../../Utils/storage';

const handleResponse = (history, reset) =>
    (res) => {
        reset();
        console.log('response from login: ', res);
        STORAGE.setToken(_get(res, 'data.body.token', ''));
        // ADD REDUX STORE TO STORE DATA?
        navigateToLandingPage(history);
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const userLogin = (reqBody = {}, history, resetFormValues) => {
    const request = {
        path: serviceCallPaths.USER_LOGIN,
        method: 'post',
        body: JSON.stringify(reqBody)
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse(history, resetFormValues))
        .catch(handleError(history));
}