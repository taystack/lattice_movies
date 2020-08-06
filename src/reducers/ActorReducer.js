import {
  SET_ACTOR,
  SET_LOADING_ACTOR,
} from "../actions/ActorActions";


export const actorInitialState = {
  actor: {},
  loading: false,
};


export function actorReducer(state = actorInitialState, action) {
  let data = {};

  switch (action.type) {
    case SET_ACTOR:
      data = { actor: action.actor };
      break;

    case SET_LOADING_ACTOR:
      data = { loading: action.loading };
      break;

    default:
      break;
  }

  return {
    ...state,
    ...data,
  };
}
