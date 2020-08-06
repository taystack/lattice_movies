import {
  SET_KEY,
} from "../actions/AuthActions";


export const authInitialState = {
  key: true,
};


export function authReducer(state = authInitialState, action) {
  let data = {};

  switch (action.type) {
    case SET_KEY:
      data = { key: action.key };
      break;

    default:
      break;
  }

  return {
    ...state,
    ...data,
  };
}
