import { CHANGE_COORDINATES, CHANGE_ZOOM } from '../actions/map';

export const changeCoordinates = (lat, lng) => ({ type: CHANGE_COORDINATES, lat, lng });
export const changeZoom = zoom => ({ type: CHANGE_ZOOM, zoom });
