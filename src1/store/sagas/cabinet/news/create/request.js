import { put, call } from 'redux-saga/effects';
import NewsApi from '../../../../../api/news';
import { createNewsSuccess, createNewsFail } from '../../../../AC/news';

function* request({ data }) {
  const { title, text, city, type, date, time, coords, sources, media } = data;

  const _date = new Date(date);
  const _time = new Date(time);
  const dateTime = new Date(_date.getFullYear(), _date.getMonth(), _date.getDate(), _time.getHours(), _time.getMinutes());
  
  const requestBody = {
    title,
    text,
    city,
    type,
    date: +dateTime,
    coords,
    sources,
    media,
  };

  try {
    const result = yield call(NewsApi.create, requestBody);

    if (result.status === 200) {
      yield put(createNewsSuccess());
    } else {
      yield put(createNewsFail(result.status));
    }
  } catch(e) {
    console.error(e.message);
  }
}

export default request;
