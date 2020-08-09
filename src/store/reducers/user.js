import cookie from 'js-cookie';
import { SET_USER_DATA, LOGOUT_USER } from '../actions/user';
import { ROLE_USER } from '../../constants/user';

const token = cookie.get('token');
const savedRole  = localStorage.getItem('role');

const initialState = {
  isAuth: !!token,
  role: savedRole !== null ? +savedRole : ROLE_USER,
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
