import { CHANGE_COORDINATES } from '../actions/map';

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
  lat,
  lng,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_COORDINATES:
      return { ...state, lat: action.lat, lng: action.lng };
    default:
      return state;
  }
}