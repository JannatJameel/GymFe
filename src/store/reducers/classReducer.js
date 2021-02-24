import * as types from "../types";

const initialState = {
    classes: [],
    loading: true
};

const classReducer = (state=initialState, action) => {
    switch (action.type){
        case types.FETCH_CLASSES:
            return {
                ...state,
                classes: action.payload, 
                loading: false
            };
        default: return state;
    };
};

export default classReducer;