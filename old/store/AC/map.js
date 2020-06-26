import {
  CHANGE_COORDINATES,
  SET_ZOOM,
  INCREMENT_ZOOM,
  DECREMENT_ZOOM,
} from '../actions/map';

export const changeCoordinates = (lat, lng) => ({ type: CHANGE_COORDINATES, lat, lng });
export const changeZoom = zoom => ({ type: SET_ZOOM, zoom });
export const incrementZoom = () => ({ type: INCREMENT_ZOOM });
export const decrementZoom = () => ({ type: DECREMENT_ZOOM });
