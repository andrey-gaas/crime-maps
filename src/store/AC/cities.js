import {
  ADD,
  FETCH_CITIES,
  OPEN_SELECTOR,
  CLOSE_SELECTOR,
  ERROR,
} from '../actions/cities';

export const setCities = cities => ({ type: ADD, cities });
export const fetchCities = () => ({ type: FETCH_CITIES });
export const openSelector = () => ({ type: OPEN_SELECTOR });
export const closeSelector = () => ({ type: CLOSE_SELECTOR });
export const setError = error => ({ type: ERROR, error });
