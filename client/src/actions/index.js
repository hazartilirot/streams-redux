import streams from "../api/streams";
import history from "../history";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
/*whenever we use async action creator we make use of Thunk library so a
dispatch functions is expected to be returned. Remember action creator might
have two parameters, getState is optional though if some properties of state
is needed it should therefore specified*/
export const createStream = (formValues) => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post("/streams", {...formValues, userId});

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push('/')
};
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};
/*NOTE A GOTCHA! DO NOT USE PUT method to update some properties of an object
since put wipes out the rest properties and leaves those which are updated.
i.e. if title and description are updated only userId property would be
deleted. */
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push('/')
};
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
  
  history.push('/')
};