import { takeEvery } from 'redux-saga/effects';
import * as actionNews from '../../actions/news';
import fetch from './news/fetch';
import fetchFail from './news/fetchFail';

export default function* () {
  yield takeEvery(actionNews.FETCH_CABINET_NEWS, fetch);
  yield takeEvery(actionNews.FETCH_CABINET_NEWS_FAIL, fetchFail);
};
