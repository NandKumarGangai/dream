import _get from 'lodash/get';
import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelper';
import {
    navigateToLandingPage,
    navigateToErrorPage
} from '../navigations';
import { STORAGE } from '../../Utils/storage';
import { USER_LOGGED_IN } from '../../Store/types';

const handleResponse = (history, reset, dispatch) =>
    (res) => {
        reset();
        console.log('response from login: ', res);
        STORAGE.setToken(_get(res, 'data.body.token', ''));
        // ADD REDUX STORE TO STORE DATA?
        dispatch({ type: USER_LOGGED_IN, payload: _get(res, 'data.body', {}) });
        navigateToLandingPage(history);
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const userLogin = (reqBody = {}, history, resetFormValues, dispatch) => {
    const request = {
        path: serviceCallPaths.USER_LOGIN,
        method: 'post',
        body: JSON.stringify(reqBody)
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse(history, resetFormValues, dispatch))
        .catch(handleError(history));
}