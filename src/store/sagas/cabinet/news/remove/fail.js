import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../../AC/system';

function* fail({ status }) {
  if (status === 404) {
    yield put(changeSystemField('snackbar', 'Ошибка! Новость не найдена.'));
  }

  if (status === 500) {
    yield put(changeSystemField('snackbar', 'Неизвестная ошибка! Перезагрузите страницу.'));
  }

  yield delay(4000);
  yield put(changeSystemField('snackbar', ''));
}

export default fail;
