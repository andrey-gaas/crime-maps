import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { changeField } from '../../AC/forms';

function* request({ field, value, path }) {
  const disabled = `settings${field}ButtonDisabled`;
  const requestBody = { [field.toLowerCase()]: value };
  yield put(changeField(disabled, true));
  try {
    const result = yield call(axios.post, path, requestBody);
    console.log(result);
  } catch(e) {
    console.error(e.message);
  } finally {
    yield put(changeField(disabled, false));
  }
}

export default request;
