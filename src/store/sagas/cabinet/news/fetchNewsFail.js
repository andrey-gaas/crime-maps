import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../AC/system';

function* fail() {
  yield put(changeSystemField('cabinetNewsSnackbar', 'Ошибка при загрузке новостей'));
  yield delay(4000);
  yield put(changeSystemField('cabinetNewsSnackbar', ''));
}

export default fail;
