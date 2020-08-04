import * as types from '../actions/user';

export const signInValidate = () => ({ type: types.SIGN_IN_VALIDATE });
export const signInRequest = (email, password) => ({ type: types.SIGN_IN_REQUEST, email, password });
export const signInSuccess = data => ({ type: types.SIGN_IN_SUCCESS, data });
export const signInFail = message => ({ type: types.SIGN_IN_FAIL, message });

export const signUpValidate = () => ({ type: types.SIGN_UP_VALIDATE });
export const signUpRequest = requestBody => ({ type: types.SIGN_UP_REQUEST, requestBody });
export const signUpSuccess = data => ({ type: types.SIGN_UP_SUCCESS, data });
export const signUpFail = message => ({ type: types.SIGN_UP_FAIL, message });

export const setUserData = data => ({ type: types.SET_USER_DATA, data });
export const logout = () => ({ type: types.LOGOUT_USER });
export const logoutRequest = () => ({ type: types.LOGOUT_USER_REQUEST });

export const fetchUserData = () => ({ type: types.FETCH_USER_DATA });
export const fetchUserDataSuccess = data => ({ type: types.FETCH_USER_DATA_SUCCESS, data });
