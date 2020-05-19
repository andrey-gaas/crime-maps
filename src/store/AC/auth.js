import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from '../actions/auth';

export const requestSignUp = data => ({ type: SIGN_UP_REQUEST, data });
export const signUpSuccess = data => ({ type: SIGN_UP_SUCCESS, data });
export const signUpFail = data => ({ type: SIGN_UP_FAIL, data });
