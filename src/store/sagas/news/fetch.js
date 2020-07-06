import { select, call, put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../AC/system';
import { setNews } from '../../AC/news';
import NewsApi from '../../../api/news';

function* fetch() {
  yield put(changeSystemField('newsFetchSnakbar', 'Загрузка новостей...'));

  const { cityId, cities } = yield select(({ cities }) => ({
    cityId: cities.selectedCityId,
    cities: cities.data,
  }));

  const city = cities.find(({ id }) => cityId === id);
  
  try {
    const response = yield call(NewsApi.fetch, city.title);
    if (response.status === 200) yield put(setNews(response.data));
  } catch(e) {
    console.error(e);
    yield put(changeSystemField('newsFetchSnakbar', 'Ошибка! Перезагрузите страницу!'));
    yield delay(3000);
  } finally {
    yield put(changeSystemField('newsFetchSnakbar', ''));
  }
}

export default fetch;
