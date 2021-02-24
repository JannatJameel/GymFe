import instance from "./instance";
import * as types from "../types";

export const fetchGyms = () => {
    return async (dispatch) => {
      try {
        const res = await instance.get("/gyms");
        dispatch({
          type: types.FETCH_GYMS,
          payload: res.data,
        });
      } catch (error) {
        console.log("error:", error);
      }
    };
  };
  
  export const createGym = (newGym) => {
    return async (dispatch) => {
      try {
        const res = await instance.post(`/gyms`, newGym);
        dispatch({
          type: types.CREATE_GYM,
          payload: res.data,
        });
      } catch (error) {
        console.log("error:", error);
      }
    };
  };