import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { changeField } from '../../AC/forms';
import { success, fail } from '../../AC/settings';

function* request({ field, value, path }) {
  const disabled = `settings${field}ButtonDisabled`;
  const requestBody = { [field.toLowerCase()]: value };
  yield put(changeField(disabled, true));

  try {
    const { data } = yield call(axios.post, path, requestBody);

    if (data.status === 'OK')
      yield put(success(field, data.message, value));
    else
      yield put(fail(`settings${field}Error`, data));
  } catch(e) {
    yield put(fail(`settings${field}Error`, 'Произошла ошибка на сервере. Попробуйте еще раз.'))
    console.error(e.message);
  } finally {
    yield put(changeField(disabled, false));
  }
}

export default request;
