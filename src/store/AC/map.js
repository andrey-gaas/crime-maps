import { CHANGE_COORDINATES } from '../actions/map';

export const changeCoordinates = (lat, lng) => ({ type: CHANGE_COORDINATES, lat, lng });
