import axios from "axios";
import * as actionTypes from "./actionTypes";

export const startAuth = () => {
  return {
    type: actionTypes.START_AUTH,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId,
  };
};

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL,
  };
};

export const signOut = () => {
  return {
    type: actionTypes.AUTH_SIGN_OUT,
  };
};

export const authTimeout = (expiresIn) => {
  return (dispatch) => {
    setTimeout(() => dispatch(signOut()), +expiresIn * 1000);
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(startAuth());
    const data = { email, password, returnSecureToken: true };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAy72xnK6xSObj6y3i9mM1qFNFJPz4BBKA",
        data
      )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(authTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail());
      });
  };
};
