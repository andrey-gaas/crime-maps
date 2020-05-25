import { takeEvery, select, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import emailValidator from 'email-validator';
import { changeSystemField } from '../../AC/system';
import { changeField } from '../../AC/forms';
import { setUserField } from '../../AC/user';
import {
  requestNewEmail,
  successNewEmail,
  failNewEmail,
} from '../../AC/settings';
import { ROUTE_SETTINGS_EMAIL } from '../../../api/settings';
import {
  VALIDATE_NEW_EMAIL,
  REQUEST_NEW_EMAIL,
  SUCCESS_NEW_EMAIL,
  FAIL_NEW_EMAIL,
} from '../../actions/settings';

function* validate() {
  const { email, currentEmail } = yield select(({ forms, user }) => ({
    email:        forms.settingsEmail,
    currentEmail: user.email,
  }));

  let error = '';

  if (!email) error = 'Введите новый E-Mail.';
  else if (email === currentEmail) error = 'Придумайте новый E-Mail.';
  else if (!emailValidator.validate(email)) error = 'Введите корректный E-Mail';

  if (error) yield put(changeField('settingsEmailError', error));
  else yield put(requestNewEmail(email));
}

function* request({ email }) {
  const buttonDisabled = 'settingsEmailButtonDisabled';
  const requestBody = { email };

  yield put(changeField(buttonDisabled, true));

  try {
    const { data } = yield call(axios.post, ROUTE_SETTINGS_EMAIL, requestBody);

    if (data === 'OK') yield put(successNewEmail(email));
    else yield put(failNewEmail(data));
  } catch(e) {
    console.error(e.message);
    yield put(failNewEmail('Произошла ошибка. Перезагрузите страницу и попробуйте еще раз.'));
  } finally {
    yield put(changeField(buttonDisabled, false));
  }
}

function* success({ email }) {
  yield put(changeField('settingsEmail', ''));
  yield put(setUserField('email', email));
  yield put(changeSystemField('settingSnackbar', 'Новый E-Mail сохранен!'));
  yield delay(5000);
  yield put(changeSystemField('settingSnackbar', ''));
}

function* fail({ message }) {
  yield put(changeField('settingsEmailError', message));
}

export default function* () {
  yield takeEvery(VALIDATE_NEW_EMAIL, validate);
  yield takeEvery(REQUEST_NEW_EMAIL, request);
  yield takeEvery(SUCCESS_NEW_EMAIL, success);
  yield takeEvery(FAIL_NEW_EMAIL, fail);
};
