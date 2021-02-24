import * as types from "../types";

const initialState = {
    admin: null,
    user: null,
};

const authReducer = (state=initialState, action) => {
    switch (action.type){
        case types.SET_ADMIN:
            return {
                ...state,
                admin: action.payload
            };
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default: return state;
    };
};

export default authReducer;