import {
  ADD,
  FETCH_CITIES,
  MODAL,
  ERROR,
  LOADING,
  CHANGE_CITY,
  CHANGE_SELECTED_CITY,
} from '../actions/cities';

export const setCities = cities => ({ type: ADD, cities });
export const fetchCities = () => ({ type: FETCH_CITIES });
export const setModal = isOpen => ({ type: MODAL, isOpen});
export const setError = error => ({ type: ERROR, error });
export const setLoading = loading => ({ type: LOADING, loading });
export const changeCity = id => ({ type: CHANGE_CITY, id });
export const changeSelectedCity = id => ({ type: CHANGE_SELECTED_CITY, id });
