import * as types from "../types";

const messageReducer = (state = "", { type }) => {
    switch (type) {
        case types.SET_MESSAGE:
            return "The email was succesfully validated.";
        case types.RESET_MESSAGE:
            return "";
        default:
            return state;
    }
};

export default messageReducer;