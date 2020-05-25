import { takeEvery, select, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { changeSystemField } from '../../AC/system';
import { changeField } from '../../AC/forms';
import {
  requestNewPassword,
  successNewPassword,
  failNewPassword,
} from '../../AC/settings';
import { PASSWORD_TEMPLATE } from '../../../constants/forms';
import { ROUTE_SETTINGS_PASSWORD } from '../../../api/settings';
import {
  VALIDATE_NEW_PASSWORD,
  REQUEST_NEW_PASSWORD,
  SUCCESS_NEW_PASSWORD,
  FAIL_NEW_PASSWORD,
} from '../../actions/settings';

function* validate() {
  const { oldPassword, newPassword } = yield select(({ forms }) => ({
    oldPassword: forms.settingsOldPassword,
    newPassword: forms.settingsNewPassword,
  }));
  
  let oldPasswordError = '';
  let newPasswordError = '';

  if (!oldPassword) oldPasswordError = 'Введите текущий пароль.';
  else if (oldPassword.length < 6 || oldPassword.length > 16 || !oldPassword.match(PASSWORD_TEMPLATE)) oldPasswordError = 'Введите корректный пароль.';

  else if (!newPassword) newPasswordError = 'Введите новый пароль';
  else if (oldPassword === newPassword) newPasswordError = 'Придумайте новый пароль';
  else if (newPassword.length < 6 || newPassword.length > 16 || !newPassword.match(PASSWORD_TEMPLATE)) newPasswordError = 'Пароль должен содержать от 6 до 16 символов латинского алфавита или цифр.';

  if (oldPasswordError) {
    yield put(changeField('settingsOldPasswordError', oldPasswordError));
  } else if (newPasswordError) {
    yield put(changeField('settingsNewPasswordError', newPasswordError));
  } else {
    yield put(requestNewPassword(oldPassword, newPassword));
  }
}

function* request({ oldPassword, newPassword }) {
  const buttonDisabled = 'settingsPasswordButtonDisabled';
  const requestBody = { oldPassword, newPassword };

  yield put(changeField(buttonDisabled, true));

  try {
    const { data } = yield call(axios.post, ROUTE_SETTINGS_PASSWORD, requestBody);

    if (data === 'OK') yield put(successNewPassword());
    else yield put(failNewPassword(data));
  } catch(e) {
    console.error(e.message);
    yield put(failNewPassword({ field: 'newPassword', message: 'Произошла ошибка. Перезагрузите страницу и попробуйте еще раз.' }));
  } finally {
    yield put(changeField(buttonDisabled, false));
  }
}

function* success() {
  yield put(changeField('settingsOldPassword', ''));
  yield put(changeField('settingsNewPassword', ''));
  yield put(changeSystemField('settingSnackbar', 'Пароль изменен!'));
  yield delay(5000);
  yield put(changeSystemField('settingSnackbar', ''));
}

function* fail({ data }) {
  const { field, message } = data;

  if (field === 'oldPassword') yield put(changeField('settingsOldPasswordError', message));
  else yield put(changeField('settingsNewPasswordError', message));
}

export default function* () {
  yield takeEvery(VALIDATE_NEW_PASSWORD, validate);
  yield takeEvery(REQUEST_NEW_PASSWORD, request);
  yield takeEvery(SUCCESS_NEW_PASSWORD, success);
  yield takeEvery(FAIL_NEW_PASSWORD, fail);
};
