import { SET_USER, LOGOUT_USER } from '../actions/user';

const initialState = {};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...action.user };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
