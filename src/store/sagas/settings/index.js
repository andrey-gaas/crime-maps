import { takeEvery } from 'redux-saga/effects';
import {
  VALIDATE_NEW_NAME,
  VALIDATE_NEW_EMAIL,
  VALIDATE_NEW_PASSWORD,
  REQUEST_SETTINGS_ACCOUNT_DATA,
  SETTINGS_ACCOUNT_SUCCESS,
  SETTINGS_ACCOUNT_FAIL,
} from '../../actions/settings';
import nameValidate from './name';
import emailValidate from './email';
import passwordValidate from './password';
import request from './request';
import success from './success';
import fail from './fail';

function* settings() {
  yield takeEvery(VALIDATE_NEW_NAME, nameValidate);
  yield takeEvery(VALIDATE_NEW_EMAIL, emailValidate);
  yield takeEvery(VALIDATE_NEW_PASSWORD, passwordValidate);
  yield takeEvery(REQUEST_SETTINGS_ACCOUNT_DATA, request);
  yield takeEvery(SETTINGS_ACCOUNT_SUCCESS, success);
  yield takeEvery(SETTINGS_ACCOUNT_FAIL, fail);
}

export default settings;
