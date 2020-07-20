import { put, call, select } from 'redux-saga/effects';
import NewsApi from '../../../../api/news';
import {
  fetchCabinetNewsFail as fail,
  setCabinetNews,
} from '../../../AC/news';

function* fetch(props) {
  const { cityId } = props;
  const { cities } = yield select(({ cities }) => ({ cities: cities.data }));

  const selectedCity = cities.find(city => city.id === cityId);

  try {
    const result = yield call(NewsApi.fetchAll, selectedCity.title);

    if (result.status === 200) yield put(setCabinetNews(result.data.reverse()));
    else yield put(fail())
  } catch(e) {
    console.error(e.message);
  }
}

export default fetch;
