import { select, call, put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../AC/system';
import { setAllNews } from '../../AC/news';
import NewsApi from '../../../api/news';

function* fetchAllNews() {
  yield put(changeSystemField('snackbar', 'Загрузка новостей...'));

  const { cityId, cities } = yield select(({ cities }) => ({
    cityId: cities.selectedCityId,
    cities: cities.data,
  }));

  const city = cities.find(({ id }) => cityId === id);
  
  try {
    const response = yield call(NewsApi.fetchAll, city.title);
    if (response.status === 200) yield put(setAllNews(response.data));
    else {
      yield put(changeSystemField('snackbar', 'Ошибка загрузки новостей.'));
      yield delay(3000);
    }
  } catch(e) {
    console.error(e);
    yield put(changeSystemField('snackbar', 'Неизвестная ошибка! Пожалуйста, перезагрузите страницу.'));
    yield delay(3000);
  } finally {
    yield put(changeSystemField('snackbar', ''));
  }
}

export default fetchAllNews;
