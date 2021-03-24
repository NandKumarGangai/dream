import * as types from "../types";

const candidatesReducer = (state = {}, { type, payload = {} }) => {
    switch (type) {
        case types.CANDIDATE_PROFILES: {
            return { ...state, ...payload };
        }

        default:
            return state;
    }
};

export default candidatesReducer;