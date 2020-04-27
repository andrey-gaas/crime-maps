import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CITIES, CHANGE_CITY } from '../actions/cities';
import { setCities, setError, setLoading, changeSelectedCity } from '../AC/cities';
import { fetchAllIncidents } from '../AC/incidents';

function* fetchCities() {
  try {
    const { data } = yield call(axios.get, '/api/cities/');
    localStorage.setItem('citiesList', JSON.stringify(data));
    yield put(setCities(data));
    yield put(setError(false));
    yield put(setLoading(false));
  } catch(error) {
    console.error(error.message);
    yield put(setError(true));
  }
}

function* changeCity(props) {
  try {
    const { id } = props;
    yield put(fetchAllIncidents(id));
    yield put(changeSelectedCity(id));
  } catch(error) {
    console.error(error.message);
  }
}

export default function* () {
  yield takeLatest(FETCH_CITIES, fetchCities);
  yield takeLatest(CHANGE_CITY, changeCity);
}
