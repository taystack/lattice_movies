import {
  SET_KEY,
  SET_SHOW_API_KEY_PROMPT,
} from "../actions/AuthActions";


export const authInitialState = {
  key: false,
  showApiKeyPrompt: false,
};


export function authReducer(state = authInitialState, action) {
  let data = {};

  switch (action.type) {
    case SET_KEY:
      data = { key: action.key };
      break;

    case SET_SHOW_API_KEY_PROMPT:
      data = { showApiKeyPrompt: action.show };
      break;

    default:
      break;
  }

  return {
    ...state,
    ...data,
  };
}
