import instance from "./instance";
import * as types from "../types";

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes");
      dispatch({
        type: types.FETCH_CLASSES,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const createClass = (newClass) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `gyms/${newClass.gymId}/classes`,
        newClass
      );
      dispatch({
        type: types.CREATE_CLASS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
