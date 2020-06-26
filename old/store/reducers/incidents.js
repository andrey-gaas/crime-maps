import {
  SET_LOADING,
  SET_ERROR,
  SET_INCIDENTS,
} from '../actions/incidents';

const initialState = {
  isLoading: true,
  data: [],
  error: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_INCIDENTS:
      return { ...state, data: action.incidents };
    case SET_LOADING:
      return { ...state, isLoading: false };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
