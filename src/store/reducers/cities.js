import { ADD, OPEN_SELECTOR, CLOSE_SELECTOR } from '../actions/cities';

const initialState = {
  isSelectorOpen: true,
  data: []
};

function cities(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {...state, data: action.data};
    case OPEN_SELECTOR:
      return {...state, isSelectorOpen: true};
    case CLOSE_SELECTOR:
      return {...state, isSelectorOpen: false};
    default:
      return state;
  }
}

export default cities;
