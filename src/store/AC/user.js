import {
  SIGN_IN_VALIDATE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SET_USER_DATA,
} from '../actions/user';

export const validateSignIn = () => ({ type: SIGN_IN_VALIDATE });
export const signInRequest = (email, password) => ({ type: SIGN_IN_REQUEST, email, password });
export const signInSuccess = data => ({ type: SIGN_IN_SUCCESS, data });
export const signInFail = message => ({ type: SIGN_IN_FAIL, message });
export const setUserData = data => ({ type: SET_USER_DATA, data });
