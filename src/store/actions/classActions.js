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
      console.log("Class from backend", res.data);
      dispatch({
        type: types.CREATE_CLASS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const bookClass = (bookedClass) => {
  return async (dispatch) => {
      try {
          // const formData = new FormData();
          // for(const Key in updatedClass) formData.append(Key, updatedClass[Key]);
          console.log("Boookinnng");
          await instance.post(`/classes/bookclass`, bookedClass);
          const res = await instance.get(`/classes/${bookedClass.id}`);
          dispatch({
              type: types.BOOK_CLASS, 
              payload: res.data
          });
      } catch(error) {
          console.log("error:", error);
      }
  }
};
