import { takeEvery } from 'redux-saga/effects';
import { FETCH_CITIES, FETCH_CITIES_SUCCESS, FETCH_CITIES_FAIL } from '../../actions/cities';
import fetch from './fetch';
import success from './success';
import fail from './fail';

export default function* () {
  yield takeEvery(FETCH_CITIES, fetch);
  yield takeEvery(FETCH_CITIES_SUCCESS, success);
  yield takeEvery(FETCH_CITIES_FAIL, fail);
};
