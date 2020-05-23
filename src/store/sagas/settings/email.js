import { select, put } from 'redux-saga/effects';
import emailValidator from 'email-validator';
import { changeField } from '../../AC/forms';
import { request } from '../../AC/settings';
import { ROUTE_SETTINGS_EMAIL } from '../../../api/settings';


function* validate() {
  const { email, currentEmail } = yield select(({ forms, user }) => ({
    email:        forms.settingsEmail,
    currentEmail: user.email,
  }));

  let error = '';

  if (!email) error = 'Введите новый E-Mail.';
  else if (email === currentEmail) error = 'Вы ввели ваш текущий E-Mail.';
  else if (!emailValidator.validate(email)) error = 'Введите корректный E-Mail.';

  if (error) {
    yield put(changeField('settingsEmailError', error));
  } else {
    yield put(request('Email', email, ROUTE_SETTINGS_EMAIL));
  }
}

export default validate;