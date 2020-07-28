import { put } from 'redux-saga/effects';
import { fetchAllNews } from '../../AC/news';
import { changeSelectedCityId } from '../../AC/cities';

function* changeCity({ id }) {
  yield put(fetchAllNews(id));
  yield put(changeSelectedCityId(id));
}

export default changeCity;
