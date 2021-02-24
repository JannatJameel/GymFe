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
        default: return state;
    };
};

export default gymReducer;