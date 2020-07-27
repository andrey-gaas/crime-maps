import { put, select, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../../AC/system';
import { createNewsRequest } from '../../../../AC/news';

function* validation() {
  const { title, text, cityId, type, date, time, coords, sources, cities } = yield select(({ forms, cities }) => ({
    title:   forms.createNewsTitle,
    text:    forms.createNewsText,
    cityId:  forms.createNewsCity,
    type:    forms.createNewsType,
    date:    forms.createNewsDate,
    time:    forms.createNewsTime,
    coords:  forms.createNewsCoords,
    sources: forms.createNewsSources,
    cities:  cities.data,
  }));

  if (!title || !text || (!cityId && cityId !== 0) || (!type && type !== 0) || !date || !time) {
    yield put(changeSystemField('snackbar', 'Вернитесь на первый шаг и заполните пустые поля.'));
    yield delay(5000);
    yield put(changeSystemField('snackbar', ''));
  } else if (!coords || !coords.length) {
    yield put(changeSystemField('snackbar', 'Вернитесь на третий шаг и укажите место.'));
    yield delay(5000);
    yield put(changeSystemField('snackbar', ''));
  } else {
    const city = cities.find(city => city.id === cityId);
    yield put(createNewsRequest({
      title,
      text,
      city: city.title,
      type,
      date,
      time,
      coords,
      sources: sources || [],
      media: [],
    }));
  }
}

export default validation;
