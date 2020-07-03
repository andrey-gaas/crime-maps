import { select, cancel, put } from 'redux-saga/effects';
import emailValidator from 'email-validator';
import { changeField } from '../../AC/forms';
import { signInFail, signInRequest } from '../../AC/user';
import { PASSWORD_TEMPLATE } from '../../../constants/forms';

function* validation() {
  const { email, emailError, password, passwordError } = yield select(({ forms }) => ({
    email:         forms.signInEmail,
    emailError:    forms.signInEmailError,
    password:      forms.signInPassword,
    passwordError: forms.signInPasswordError
  }));
  let isInvalid = false;
  
  if (emailError || passwordError) yield cancel();

  yield put(changeField('signInButtonDisabled', true));

  if (!emailValidator.validate(email)) {
    yield put(changeField('signInEmailError', 'Введите корректный E-Mail.'));
    isInvalid = true;
  }

  if (!password || !password.match(PASSWORD_TEMPLATE) || password.length < 6 || password.length > 16) {
    yield put(changeField('signInPasswordError', 'Введите корректный пароль.'));
    isInvalid = true;
  }

  if (isInvalid) yield put(signInFail('Введены некорректные данные'));
  else yield put(signInRequest(email, password));
}

export default validation;
