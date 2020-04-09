import {
  ADD,
  MODAL,
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
    case MODAL:
      return {...state, isSelectorOpen: action.isOpen};
    case ERROR:
      return {...state, error: action.error};
    case LOADING:
      return {...state, loading: action.loading};
    default:
      return state;
  }
}

export default cities;
