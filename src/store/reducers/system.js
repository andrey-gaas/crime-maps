import { CHANGE_SYSTEM_FIELD } from '../actions/system';

const initialState = {

};

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SYSTEM_FIELD:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}
