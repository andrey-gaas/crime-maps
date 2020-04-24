import {
  FETCH_ALL_INCIDENTS,
  FETCH_INCIDENT,
  SET_LOADING,
  SET_ERROR,
  SET_INCIDENTS,
} from '../actions/incidents';

export const fetchAllIncidents = () => ({ type: FETCH_ALL_INCIDENTS });
export const fetchIncident = id => ({ type: FETCH_INCIDENT, id });
export const setLoading = value => ({ type: SET_LOADING, value });
export const setError = error => ({ type: SET_ERROR, error });
export const setIncidents = incidents => ({ type: SET_INCIDENTS, incidents })