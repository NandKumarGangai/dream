import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelper';
import {
    navigateToLoginPage,
    navigateToErrorPage
} from '../navigations';

const handleResponse = (history, reset) =>
    () => {
        reset();
        navigateToLoginPage(history);
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const addNewUser = (reqBody = {}, history, resetFormValues) => {
    const request = {
        path: serviceCallPaths.REGISTER_NEW_USER,
        method: 'post',
        body: JSON.stringify(reqBody)
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse(history, resetFormValues))
        .catch(handleError(history));
}