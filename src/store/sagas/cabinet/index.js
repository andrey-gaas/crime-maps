import { takeEvery } from 'redux-saga/effects';
import { FETCH_NEWS_FOR_CABINET } from '../../actions/news';
import newsStart from './news/start';

export default function* () {
  yield takeEvery(FETCH_NEWS_FOR_CABINET, newsStart);
};
