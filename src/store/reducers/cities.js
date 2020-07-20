import {
  SET_CITIES,
  MODAL,
  SET_CITY_ERROR,
  SET_CITIES_LOADING,
  CHANGE_SELECTED_CITY,
} from '../actions/cities';

const initialState = {
  data: JSON.parse(localStorage.getItem('citiesList')) || [{ _id: '5e8f0f4f8883b725cc275bad', id: 1, title: 'novosibirsk', name: 'Новосибирск', lat: 55.0415, lng: 82.9346 }],
  isSelectorOpen: false,
  error: false,
  loading: true,
  selectedCityId: +localStorage.getItem('selectedCity') || 1,
};

function cities(state = initialState, action) {
  switch(action.type) {
    case SET_CITIES:
      return {...state, data: action.cities};
    case MODAL:
      return {...state, isSelectorOpen: action.isOpen};
    case SET_CITY_ERROR:
      return {...state, error: action.error};
    case SET_CITIES_LOADING:
      return {...state, loading: action.loading};
    case CHANGE_SELECTED_CITY:
      return {...state, selectedCityId: action.id};
    default:
      return state;
  }
}

export default cities;
