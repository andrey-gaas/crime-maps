import { put, select, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../../AC/system';
import { createNewsRequest } from '../../../../AC/news';

function* validation() {
  const { title, text, city, type, date, time, coords, sources } = yield select(({ forms }) => ({
    title:   forms.createNewsTitle,
    text:    forms.createNewsText,
    city:    forms.createNewsCity,
    type:    forms.createNewsType,
    date:    forms.createNewsDate,
    time:    forms.createNewsTime,
    coords:  forms.createNewsCoords,
    sources: forms.createNewsSources,
  }));

  if (!title || !text || (!city && city !== 0) || (!type && type !== 0) || !date || !time) {
    yield put(changeSystemField('createNewsSnackbar', 'Вернитесь на первый шаг и заполните пустые поля.'));
    yield delay(5000);
    yield put(changeSystemField('createNewsSnackbar', ''));
  } else if (!coords || !coords.length) {
    yield put(changeSystemField('createNewsSnackbar', 'Вернитесь на третий шаг и укажите место.'));
    yield delay(5000);
    yield put(changeSystemField('createNewsSnackbar', ''));
  } else {
    yield put(createNewsRequest({
      title,
      text,
      city,
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
