import { ADD, OPEN_SELECTOR, CLOSE_SELECTOR, ERROR } from '../actions/cities';

const initialState = {
  isSelectorOpen: false,
  data: [],
  error: false,
};

function cities(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {...state, data: action.cities};
    case OPEN_SELECTOR:
      return {...state, isSelectorOpen: true};
    case CLOSE_SELECTOR:
      return {...state, isSelectorOpen: false};
    case ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
}

export default cities;
