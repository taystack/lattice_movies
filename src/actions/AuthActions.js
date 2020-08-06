import Backend from "../models/Backend";

export const SET_KEY = "SET_KEY";

export const setKey = key => ({
  type: SET_KEY,
  key,
});

export const checkIn = (historyPush) => {
  return async (dispatch, getState) => {
    const hasKey = await Backend.checkIn();
    dispatch(setKey(hasKey));
  };
};
