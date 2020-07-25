import { takeEvery } from 'redux-saga/effects';
import { FETCH_ALL_NEWS, FETCH_NEWS, CREATE_NEWS_VALIDATION } from '../../actions/news';
import fetchAllNews from './fetchAllNews';
import fetchNews from './fetchNews';
import createValidation from './create/validation';

export default function* () {
  yield takeEvery(FETCH_ALL_NEWS, fetchAllNews);
  yield takeEvery(FETCH_NEWS, fetchNews);
  yield takeEvery(CREATE_NEWS_VALIDATION, createValidation);
};
