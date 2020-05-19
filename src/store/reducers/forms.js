import { CHANGE } from '../actions/forms';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return { ...state, [action.name]: [action.value] };
    default:
      return state;
  }
}
