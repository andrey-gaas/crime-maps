import { takeEvery } from 'redux-saga/effects';
import * as actionNews from '../../actions/news';
import fetch from './news/fetch';
import fetchFail from './news/fetchFail';
import createNewsValidation from './news/create/validation';
import createNewsRequest from './news/create/request';

export default function* () {
  yield takeEvery(actionNews.FETCH_CABINET_NEWS, fetch);
  yield takeEvery(actionNews.FETCH_CABINET_NEWS_FAIL, fetchFail);
  yield takeEvery(actionNews.CREATE_NEWS_VALIDATION, createNewsValidation);
  yield takeEvery(actionNews.CREATE_NEWS_REQUEST, createNewsRequest);
};
