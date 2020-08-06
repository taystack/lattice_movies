import Backend from "../models/Backend";


export const SET_ACTOR = "SET_ACTOR";
export const SET_LOADING_ACTOR = "SET_LOADING_ACTOR";

export const setActor = actor => ({
  type: SET_ACTOR,
  actor,
});

export const setLoadingActor = loading => ({
  type: SET_LOADING_ACTOR,
  loading,
});

export const getActor = personId => {
  return async dispatch => {
    const actor = await Backend.person(personId);
    console.log("actor", actor);
    dispatch(setActor(actor));
  };
}
