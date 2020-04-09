import {
  ADD,
  FETCH_CITIES,
  MODAL,
  ERROR,
  LOADING
} from '../actions/cities';

export const setCities = cities => ({ type: ADD, cities });
export const fetchCities = () => ({ type: FETCH_CITIES });
export const setModal = isOpen => ({ type: MODAL, isOpen});
export const setError = error => ({ type: ERROR, error });
export const setLoading = loading => ({ type: LOADING, loading });
