import * as types from '../actions/cabinet';

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_CABINET_USERS:
      return { ...state, users: [...action.users] };
    default:
      return state;
  }
};
