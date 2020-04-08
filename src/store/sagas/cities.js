import { takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CITIES } from '../actions/cities';

function* fetchCities() {
  try {
    const result = yield call(axios.get, '/api/cities/');
    console.log(result);
  } catch(e) {
    console.log(e.message);
  }
}

export default function* () {
  yield takeLatest(FETCH_CITIES, fetchCities);
}
