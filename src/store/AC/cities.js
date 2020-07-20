import * as types from '../actions/cities';

export const setCities = cities => ({ type: types.SET_CITIES, cities });
export const setModal = isOpen => ({ type: types.MODAL, isOpen});
export const setError = error => ({ type: types.SET_CITY_ERROR, error });
export const setLoading = loading => ({ type: types.SET_CITIES_LOADING, loading });
export const changeCity = id => ({ type: types.CHANGE_CITY, id });
export const changeSelectedCity = id => ({ type: types.CHANGE_SELECTED_CITY, id });

export const fetchCities = () => ({ type: types.FETCH_CITIES });
export const fetchSuccess = data => ({ type: types.FETCH_CITIES_SUCCESS, data });
export const fetchFail = () => ({ type: types.FETCH_CITIES_FAIL });
