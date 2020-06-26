import { takeEvery, select, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { changeSystemField } from '../../AC/system';
import { changeField } from '../../AC/forms';
import { setUserField } from '../../AC/user';
import {
  requestNewName,
  successNewName,
  failNewName,
} from '../../AC/settings';
import { NAME_TEMPLATE } from '../../../constants/forms';
import { ROUTE_SETTINGS_NAME } from '../../../api/settings';
import {
  VALIDATE_NEW_NAME,
  REQUEST_NEW_NAME,
  SUCCESS_NEW_NAME,
  FAIL_NEW_NAME,
} from '../../actions/settings';

function* validate() {
  const { name, currentName } = yield select(({ forms, user }) => ({
    name:        forms.settingsName,
    currentName: user.name,
  }));

  let error = '';

  if (!name) error = 'Введите новое имя.';
  else if (name === currentName) error = 'Придумайте новое имя.';
  else if (name.length < 6 || name.length > 16) error = 'Имя должно содержать от 6 до 16 символов.';
  else if (!name.match(NAME_TEMPLATE)) error = 'Допустимы только латинские и кириллические символы, а так же числа.';

  if (error) {
    yield put(changeField('settingsNameError', error));
  } else {
    yield put(requestNewName(name));
  }
}

function* request({ name }) {
  const buttonDisabled = 'settingsNameButtonDisabled';
  const requestBody = { name };

  yield put(changeField(buttonDisabled, true));

  try {
    const { data } = yield call(axios.post, ROUTE_SETTINGS_NAME, requestBody);

    if (data === 'OK') yield put(successNewName(name));
    else yield put(failNewName(data));
  } catch(e) {
    console.error(e.message);
    yield put(failNewName('Произошла ошибка. Перезагрузите страницу и попробуйте еще раз.'));
  } finally {
    yield put(changeField(buttonDisabled, false));
  }
}

function* success({ name }) {
  yield put(changeField('settingsName', ''));
  yield put(setUserField('name', name));
  yield put(changeSystemField('settingSnackbar', 'Новое имя сохранено!'));
  yield delay(5000);
  yield put(changeSystemField('settingSnackbar', ''));
}

function* fail({ message }) {
  yield put(changeField('settingsNameError', message));
}

export default function* () {
  yield takeEvery(VALIDATE_NEW_NAME, validate);
  yield takeEvery(REQUEST_NEW_NAME, request);
  yield takeEvery(SUCCESS_NEW_NAME, success);
  yield takeEvery(FAIL_NEW_NAME, fail);
};
