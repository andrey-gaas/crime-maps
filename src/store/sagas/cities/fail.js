import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../AC/system';
import { setLoading, setError } from '../../AC/cities';

function* fail() {
  yield put(setError(true));
  yield put(setLoading(false));
  yield put(changeSystemField('snackbar', 'Ошибка загрузки списка городов.'));
  yield delay(5000);
  yield put(changeSystemField('snackbar', ''));
}

export default fail;
