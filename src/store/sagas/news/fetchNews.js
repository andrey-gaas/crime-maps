import { call, put } from 'redux-saga/effects';
import { setActiveNews } from '../../AC/news';
import NewsApi from '../../../api/news';

function* fetchAllNews({ id }) {
  try {
    const response = yield call(NewsApi.fetch, id);

    if (response.status === 200) yield put(setActiveNews(response.data));
    if (response.status === 404) yield put(setActiveNews({ error: 'Новость не найдена.' }));
  } catch(e) {
    console.error(e);
  }
}

export default fetchAllNews;
