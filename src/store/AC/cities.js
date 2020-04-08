import { ADD, FETCH_CITIES } from '../actions/cities';

export const addCities = cities => ({ type: ADD, cities });
export const fetchCities = () => ({ type: FETCH_CITIES });
