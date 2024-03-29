import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  CHECK_USER_AUTH,
} from '../actions/auth';

export const requestSignUp = () => ({ type: SIGN_UP_REQUEST });
export const signUpSuccess = data => ({ type: SIGN_UP_SUCCESS, data });
export const signUpFail = data => ({ type: SIGN_UP_FAIL, data });

export const signInRequest = () => ({ type: SIGN_IN_REQUEST });
export const signInSuccess = data => ({ type: SIGN_IN_SUCCESS, data });
export const signInFail = data => ({ type: SIGN_IN_FAIL, data });

export const checkUserAuth = () => ({ type: CHECK_USER_AUTH });
