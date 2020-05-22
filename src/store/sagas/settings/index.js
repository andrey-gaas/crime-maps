import { takeEvery } from 'redux-saga/effects';
import {
  VALIDATE_NEW_NAME,
  VALIDATE_NEW_EMAIL,
  VALIDATE_NEW_PASSWORD,
  REQUEST_SETTINGS_ACCOUNT_DATA,
} from '../../actions/settings';
import nameValidate from './name';
import emailValidate from './email';
import passwordValidate from './password';
import request from './request';

function* settings() {
  yield takeEvery(VALIDATE_NEW_NAME, nameValidate);
  yield takeEvery(VALIDATE_NEW_EMAIL, emailValidate);
  yield takeEvery(VALIDATE_NEW_PASSWORD, passwordValidate);
  yield takeEvery(REQUEST_SETTINGS_ACCOUNT_DATA, request);
}

export default settings;
