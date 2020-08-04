import * as map from '../actions/map';

export const setLocation =       data => ({ type: map.SET_LOCATION, data });
export const setLocationError =  error => ({ type: map.SET_LOCATION_ERROR, error });
export const changeCoordinates = (lat, lng) => ({ type: map.CHANGE_COORDINATES, lat, lng });
export const changeZoom =        zoom => ({ type: map.SET_ZOOM, zoom });
export const incrementZoom =     () => ({ type: map.INCREMENT_ZOOM });
export const decrementZoom =     () => ({ type: map.DECREMENT_ZOOM });
export const changeNewsTypes =   typeNews => ({ type: map.CHANGE_NEWS_TYPES, typeNews });
