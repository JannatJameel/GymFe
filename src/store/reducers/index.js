import { combineReducers } from "redux";
import userReducer from "./authReducer";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";

const rootReducer = combineReducers({ userReducer, gymReducer, classReducer });

export default rootReducer;