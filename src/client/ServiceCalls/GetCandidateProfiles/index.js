import _get from 'lodash/get';
import { makeServiceCall, serviceCallPaths, convertToJson } from '../serviceCallHelper';
import { navigateToErrorPage } from '../navigations';
import { CANDIDATE_PROFILES } from '../../Store/types';

const handleResponse = (history, reset, dispatch) =>
    (res) => {

        const payload = _get(res, 'data.body', {});
        dispatch({ type: CANDIDATE_PROFILES, payload });

        return payload;
    };

const handleError = history => err => {
    console.error('Custom Error: ', err);

    return navigateToErrorPage(history);
};

export const getCandidateProfiles = (reqBody = {}, history, resetFormValues, dispatch) => {
    const request = {
        path: serviceCallPaths.GET_CANDIDATE_PROFILES,
        method: 'post',
        body: JSON.stringify(reqBody)
    };

    return makeServiceCall(request)
        .then(convertToJson)
        .then(handleResponse(history, resetFormValues, dispatch))
        .catch(handleError(history));
}