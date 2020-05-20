import { SET_USER, LOGOUT_USER } from '../actions/user';

const initialState = {
  isAuth: false,
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
