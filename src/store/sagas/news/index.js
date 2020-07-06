import { takeEvery } from 'redux-saga/effects';
import { FETCH_NEWS } from '../../actions/news';
import fetch from './fetch';

export default function* () {
  yield takeEvery(FETCH_NEWS, fetch);
};
