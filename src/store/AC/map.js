import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  CHANGE_COORDINATES,
  SET_ZOOM,
  INCREMENT_ZOOM,
  DECREMENT_ZOOM,
  CHANGE_NEWS_TYPES,
} from '../actions/map';

export const setLocation = data => ({ type: SET_LOCATION, data });
export const setLocationError = error => ({ type: SET_LOCATION_ERROR, error });
export const changeCoordinates = (lat, lng) => ({ type: CHANGE_COORDINATES, lat, lng });
export const changeZoom = zoom => ({ type: SET_ZOOM, zoom });
export const incrementZoom = () => ({ type: INCREMENT_ZOOM });
export const decrementZoom = () => ({ type: DECREMENT_ZOOM });
export const changeNewsTypes = typeNews => ({ type: CHANGE_NEWS_TYPES, typeNews });
