import cookie from 'js-cookie';
import axios from 'axios';
import { SET_USER, LOGOUT_USER, SET_USER_FIELD } from '../actions/user';

const token = cookie.get('token');

const initialState = {
  isAuth: !!token,
};

if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...action.user, isAuth: true };
    case LOGOUT_USER:
      return { isAuth: false };
    case SET_USER_FIELD:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
