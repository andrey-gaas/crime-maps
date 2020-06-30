import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  CHANGE_COORDINATES,
  SET_ZOOM,
  INCREMENT_ZOOM,
  DECREMENT_ZOOM,
  CHANGE_NEWS_TYPES,
} from '../actions/map';
import { newsTypes } from '../../constants/news';

const selectedCity = +JSON.parse(localStorage.getItem('selectedCity'));
const savedCities = JSON.parse(localStorage.getItem('citiesList'));
let lat;
let lng;

if (selectedCity && savedCities) {
  const city = savedCities.find(city => city.id === selectedCity);
  lat = city.lat;
  lng = city.lng;
} else {
  lat = 55.0415;
  lng = 82.9346;
}

const initialState = {
  geodata: null,
  geodataError: false,
  lat,
  lng,
  zoom: 13,
  showTypes: [...newsTypes],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, geodata: action.data };
    case SET_LOCATION_ERROR:
      return { ...state, error: true };
    case CHANGE_COORDINATES:
      return { ...state, lat: action.lat, lng: action.lng };
    case SET_ZOOM:
      return { ...state, zoom: action.zoom };
    case INCREMENT_ZOOM:
      return { ...state, zoom: state.zoom + 1 };
    case DECREMENT_ZOOM:
      return { ...state, zoom: state.zoom - 1 };
    case CHANGE_NEWS_TYPES:
      const type = state.showTypes.find(({ type }) => type === action.typeNews);
      if (type) {
        return { ...state, showTypes: state.showTypes.filter(({ type }) => type !== action.typeNews) };
      } else {
        const typeToAdded = newsTypes.find(({ type }) => type === action.typeNews);
        return { ...state, showTypes: [...state.showTypes, typeToAdded] };
      }
    default:
      return state;
  }
}
