import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CITIES } from '../actions/cities';
import { setCities, setError, setLoading } from '../AC/cities';

function* fetchCities() {
  try {
    const { data } = yield call(axios.get, '/api/cities/');
    yield put(setCities(data));
    yield put(setError(false));
    yield put(setLoading(false));
  } catch(error) {
    console.error(error.message);
    yield put(setError(true));
  }
}

export default function* () {
  yield takeLatest(FETCH_CITIES, fetchCities);
}
