import cookie from 'js-cookie';
import { SET_USER_DATA } from '../actions/user';

const token = cookie.get('token');

const initialState = {
  isAuth: !!token,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};
