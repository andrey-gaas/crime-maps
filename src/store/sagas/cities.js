import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CITIES } from '../actions/cities';
import { setCities } from '../AC/cities';

function* fetchCities() {
  try {
    const { data } = yield call(axios.get, '/api/cities/');
    yield put(setCities(data));
  } catch(e) {
    console.log(e.message);
  }
}

export default function* () {
  yield takeLatest(FETCH_CITIES, fetchCities);
}
