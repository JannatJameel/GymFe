import * as types from "../types";

const initialState = {
    gyms: [],
    loading: true
};

const gymReducer = (state=initialState, action) => {
    switch (action.type){
        case types.FETCH_GYMS:
            return {
                ...state,
                gyms: action.payload, 
                loading: false
            };
        case types.CREATE_GYM:
            return {
                ...state,
                gyms: [...state.gyms, action.payload],
            };
        default: return state;
    };
};

export default gymReducer;