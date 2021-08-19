import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  hasErrors: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_AUTH:
      return { ...state, hasErrors: false, loading: true };
    case actionTypes.AUTH_SUCCESS:
      return {
        token: action.idToken,
        userId: action.userId,
        hasErrors: false,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    case actionTypes.AUTH_SIGN_OUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default authReducer;
