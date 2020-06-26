import { SET_LOCATION, SET_LOCATION_ERROR } from '../actions/geodata';

const initialState = {
  geodata: null,
  error: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, geodata: action.data };
    case SET_LOCATION_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
