import { takeEvery } from 'redux-saga/effects';
import { FETCH_ALL_NEWS, FETCH_NEWS } from '../../actions/news';
import fetchAllNews from './fetchAllNews';
import fetchNews from './fetchNews';

export default function* () {
  yield takeEvery(FETCH_ALL_NEWS, fetchAllNews);
  yield takeEvery(FETCH_NEWS, fetchNews);
};
