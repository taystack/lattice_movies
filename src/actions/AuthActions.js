import Backend from "../models/Backend";

export const SET_KEY = "SET_KEY";
export const SET_SHOW_API_KEY_PROMPT = "SET_SHOW_API_KEY_PROMPT";

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

export const setApiKey = key => {
  return async (dispatch, getState) => {
    const hasKey = await Backend.setApiKey(key);
  };
};
