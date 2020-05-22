import { put, delay } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';
import {} from '../../../api/settings';

function* request({ field }) {
  const disabled = `settings${field}ButtonDisabled`;

  yield put(changeField(disabled, true));

  try {
    yield delay(3000);
  } catch(e) {
    console.error(e.message);
  } finally {
    yield put(changeField(disabled, false));
  }
}

export default request;
