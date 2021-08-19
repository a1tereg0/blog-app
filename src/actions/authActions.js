import * as actionTypes from "./actionTypes";

export const startAuth = () => {
  return {
    type: actionTypes.START_AUTH,
  };
};

export const authSuccess = (auth) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    auth: auth,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    auth: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(startAuth());
  };
};
