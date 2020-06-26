import { SET_LOCATION, SET_LOCATION_ERROR } from '../actions/geodata';

export const setLocation = data => ({ type: SET_LOCATION, data });
export const setLocationError = error => ({ type: SET_LOCATION_ERROR, error });
