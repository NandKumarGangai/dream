import _get from 'lodash/get';
import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelper';
import {  navigateToErrorPage } from '../navigations';
import { USER_PROFILE } from '../../Store/types';

const handleResponse = (history, reset, dispatch) =>
    (response) => {
        reset();
        // navigateToLoginPage(history);
        const payload = _get(response, 'data.body', {});
        dispatch({ type: USER_PROFILE, payload });

        return _get(response, 'data.success', false);
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const updateUserProfile = (reqBody = {}, history, resetFormValues, dispatch) => {
    const request = {
        path: serviceCallPaths.UPDATE_USER_PROFILE,
        method: 'put',
        body: JSON.stringify(reqBody)
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse(history, resetFormValues, dispatch))
        .catch(handleError(history));
}