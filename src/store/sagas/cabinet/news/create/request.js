import { put, call } from 'redux-saga/effects';
import NewsApi from '../../../../../api/news';

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

    console.log(result);
  } catch(e) {

  }
}

export default request;
