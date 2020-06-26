import {
  OPEN_INCIDENT,
  CLOSE_INCIDENT,
} from '../actions/incident';

const initialState = null;

export default function(state = initialState, action) {
  switch(action.type) {
    case OPEN_INCIDENT:
      return { ...action.incident };
    case CLOSE_INCIDENT:
      return null;
    default:
      return state;
  }
}
