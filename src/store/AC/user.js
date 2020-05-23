import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER,
  LOGOUT_USER_REQUEST,
  SET_USER_FIELD,
} from '../actions/user';

export const loginUser = user => ({ type: LOGIN_USER, user });
export const logout = () => ({ type: LOGOUT_USER_REQUEST });
export const logoutUser = () => ({ type: LOGOUT_USER });
export const setUser = user => ({ type: SET_USER, user });
export const setUserField = (field, value) => ({ type: SET_USER_FIELD, field, value });
