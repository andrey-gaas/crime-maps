import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { changeField } from '../../AC/forms';
import { ROUTE_SETTINGS_ACCOUNT } from '../../../api/settings';

function* request({ field, value }) {
  const disabled = `settings${field}ButtonDisabled`;
  const requestBody = { [field.toLowerCase()]: value };
  yield put(changeField(disabled, true));
  try {
    const result = yield call(axios.post, ROUTE_SETTINGS_ACCOUNT, requestBody);
  } catch(e) {
    console.error(e.message);
  } finally {
    yield put(changeField(disabled, false));
  }
}

export default request;
