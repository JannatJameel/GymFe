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
        case types.CREATE_CLASS:
            return {
                ...state,
                classes: [...state.classes, action.payload],
            };
        case types.BOOK_CLASS:
            const updatedClass = action.payload;
            return {
                ...state,
                classes: state.classes.map(gymclass =>
                    gymclass.id === updatedClass.id? updatedClass : gymclass),
            };
        default: return state;
    };
};

export default classReducer;