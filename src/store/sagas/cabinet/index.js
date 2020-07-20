import { takeEvery } from 'redux-saga/effects';
import * as actionNews from '../../actions/news';
import fetchNews from './news/fetchNews';
import fetchNewsFail from './news/fetchNewsFail';

export default function* () {
  yield takeEvery(actionNews.FETCH_CABINET_NEWS, fetchNews);
  yield takeEvery(actionNews.FETCH_CABINET_NEWS_FAIL, fetchNewsFail);
};
