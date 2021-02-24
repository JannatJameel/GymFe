import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Reducer
import reducer from "./reducers";
// Actions
import { checkForToken } from "./actions/authActions";
import { fetchGyms } from "../store/actions/gymActions";
import { fetchClasses } from "../store/actions/classActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchGyms());
store.dispatch(fetchClasses());
store.dispatch(checkForToken());

export default store;
