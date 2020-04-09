import {
  ADD,
  OPEN_SELECTOR,
  CLOSE_SELECTOR,
  ERROR,
  LOADING
} from '../actions/cities';

const initialState = {
  data: [],
  isSelectorOpen: false,
  error: false,
  loading: true,
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
    case LOADING:
      return {...state, loading: action.loading};
    default:
      return state;
  }
}

export default cities;
