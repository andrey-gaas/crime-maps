import { put, select, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../AC/system';

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

  if (!title || !text || !city || !type || !date || !time) {
    yield put(changeSystemField('createNewsSnackbar', 'Вернитесь на первый шаг и заполните пустые поля.'));
    yield delay(5000);
    yield put(changeSystemField('createNewsSnackbar', ''));
  }
}

export default validation;
