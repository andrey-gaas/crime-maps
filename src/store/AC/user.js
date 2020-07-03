import {
  SIGN_IN_VALIDATE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from '../actions/user';

export const validateSignIn = () => ({ type: SIGN_IN_VALIDATE });
export const signInRequest = (email, password) => ({ type: SIGN_IN_REQUEST, email, password });
export const signInSuccess = () => ({ type: SIGN_IN_SUCCESS });
export const signInFail = message => ({ type: SIGN_IN_FAIL, message });
