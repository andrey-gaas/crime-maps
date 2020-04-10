import {
  ADD,
  MODAL,
  ERROR,
  LOADING,
  CHANGE_CITY,
} from '../actions/cities';

const initialState = {
  data: [{ _id: '5e8f0f4f8883b725cc275bad', id: 1, title: 'novosibirsk', name: 'Новосибирск', lat: 55.0415, lng: 82.9346 }],
  isSelectorOpen: false,
  error: false,
  loading: true,
  selectedCity: 1,
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
    case CHANGE_CITY:
      return {...state, selectedCity: action.id};
    default:
      return state;
  }
}

export default cities;
