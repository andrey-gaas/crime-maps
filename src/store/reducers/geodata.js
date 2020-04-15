import { SET_LOCATION, SET_LOCATION_ERROR } from '../actions/geodata';

const initialState = {
  geodata: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {...state, geodata: action.data};
    default:
      return state;
  }
}
