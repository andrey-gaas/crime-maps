import cookie from 'js-cookie';
import { SET_USER, LOGOUT_USER } from '../actions/user';

const token = cookie.get('token');
const name = cookie.get('user-name');
const email = cookie.get('user-email');
const id = cookie.get('user-id');

const initialState = {
  isAuth: !!token || false ,
  name:   name || null,
  email:  email || null,
  id:     id || null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...action.user, isAuth: true };
    case LOGOUT_USER:
      return { isAuth: false };
    default:
      return state;
  }
};
