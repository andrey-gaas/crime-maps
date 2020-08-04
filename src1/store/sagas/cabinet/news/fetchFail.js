import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../AC/system';
import { setCabinetNews } from '../../../AC/news';

function* fail() {
  yield put(setCabinetNews([]));
  yield put(changeSystemField('snackbar', 'Ошибка при загрузке новостей'));
  yield delay(4000);
  yield put(changeSystemField('snackbar', ''));
}

export default fail;
