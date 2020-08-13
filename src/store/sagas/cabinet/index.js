import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionsNews from '../../actions/news';
import * as actionsCabinet from '../../actions/cabinet';
import news from './news';
import users from './users';

export default function* () {
  /* NEWS */
  yield takeEvery(actionsNews.FETCH_CABINET_NEWS, news.fetch);
  yield takeEvery(actionsNews.FETCH_CABINET_NEWS_FAIL, news.fetchFail);
  yield takeEvery(actionsNews.CREATE_NEWS_VALIDATION, news.create.validation);
  yield takeEvery(actionsNews.CREATE_NEWS_REQUEST, news.create.request);
  yield takeEvery(actionsNews.CREATE_NEWS_SUCCESS, news.create.success);
  yield takeEvery(actionsNews.REMOVE_NEWS_REQUEST, news.remove.request);
  yield takeEvery(actionsNews.REMOVE_NEWS_SUCCESS, news.remove.success);
  yield takeEvery(actionsNews.REMOVE_NEWS_FAIL, news.remove.fail);

  /* USERS */
  yield takeEvery(actionsCabinet.CABINET_USERS_SUCCESS, users.success);
  yield takeEvery(actionsCabinet.CABINET_USERS_FAIL, users.fail);
  yield takeLatest(actionsCabinet.CABINET_USERS_REQUEST, users.fetch);
};
