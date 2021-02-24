import decode from "jwt-decode";
import instance from "./instance";
import * as types from "../types";

const setAdmin = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return ({
        type: types.SET_ADMIN, 
        payload: decode(token)
    });
};

const setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return ({
        type: types.SET_USER, 
        payload: decode(token)
    });
};

export const signup = (userData, history) => {
    return async (dispatch) => {
        try {
            const res = await instance.post("/signup", userData);
            if(userData.admin) {
                dispatch(setAdmin(res.data.token));
                history.replace("/");
            } else {
                dispatch(setUser(res.data.token));
                history.replace("/");
            };
        } catch(error) {
            console.log("error:", error);
        }
    };
};

export const signin = (userData, history) => {
    return async (dispatch) => {
        try {
            const res = await instance.post("/signin", userData);
            const admin = decode(res.data.token).admin;
            if(admin) {
                dispatch(setAdmin(res.data.token));
                history.replace("/");
            } else {
                dispatch(setUser(res.data.token));
                history.replace("/");
            };
        } catch(error) {
            console.log("error:", error);
        }
    };
};

export const signout = () => {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization
    return ({
        type: types.SET_USER,
        payload: null
    });
};

export const checkForToken = () => (dispatch) => {
    const token = localStorage.getItem("myToken");
    if(token) {
        const user = decode(token);
        const currentTime = Date.now();
        if (user.exp > currentTime) {
            if (user.admin) {
                dispatch(setAdmin(token));
            } else {
                dispatch(setUser(token));
            };
        } else {
            dispatch(signout());
        };
    };
};