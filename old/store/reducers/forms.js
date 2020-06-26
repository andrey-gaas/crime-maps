import { CHANGE_FIELD } from '../actions/forms';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}
