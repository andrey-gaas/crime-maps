import cookie from 'js-cookie';
import { SET_USER_DATA, LOGOUT_USER } from '../actions/user';

const token = cookie.get('token');

const initialState = {
  isAuth: !!token,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    case LOGOUT_USER:
      return { isAuth: false };
    default:
      return state;
  }
};
