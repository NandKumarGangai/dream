import * as types from "../types";

const usersReducer = (state = {}, { type, payload = {} }) => {
    switch (type) {
        case types.USER_LOGGED_IN:
            const data = {
                ...payload.user || {}
            }
            return { ...state, ...data };

        case types.USER_PROFILE:
            return { ...state, ...payload };

        default:
            return state;
    }
};

export default usersReducer;