import { takeEvery } from 'redux-saga/effects';
import * as actionNews from '../../actions/news';
import fetch from './news/fetch';
import fetchFail from './news/fetchFail';
import create from './news/create';
import remove from './news/remove';

export default function* () {
  yield takeEvery(actionNews.FETCH_CABINET_NEWS, fetch);
  yield takeEvery(actionNews.FETCH_CABINET_NEWS_FAIL, fetchFail);
  yield takeEvery(actionNews.CREATE_NEWS_VALIDATION, create.validation);
  yield takeEvery(actionNews.CREATE_NEWS_REQUEST, create.request);
  yield takeEvery(actionNews.CREATE_NEWS_SUCCESS, create.success);
  yield takeEvery(actionNews.REMOVE_NEWS_REQUEST, remove.request);
  yield takeEvery(actionNews.REMOVE_NEWS_SUCCESS, remove.success);
  yield takeEvery(actionNews.REMOVE_NEWS_FAIL, remove.fail);
};
