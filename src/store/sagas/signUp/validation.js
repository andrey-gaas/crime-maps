import { select, cancel, put } from 'redux-saga/effects';
import emailValidator from 'email-validator';
import { changeField } from '../../AC/forms';
import { signUpFail, signUpRequest } from '../../AC/user';
import { PASSWORD_TEMPLATE, NAME_TEMPLATE } from '../../../constants/forms';

function* validation() {
  const { name, nameError, email, emailError, password, passwordError } = yield select(({ forms }) => ({
    name:          forms.signUpName,
    nameError:     forms.signUpNameError,
    email:         forms.signUpEmail,
    emailError:    forms.signUpEmailError,
    password:      forms.signUpPassword,
    passwordError: forms.signUpPasswordError
  }));
  let isInvalid = false;
  
  if (nameError || emailError || passwordError) yield cancel();

  yield put(changeField('signUpButtonDisabled', true));

  if (!name) {
    yield put(changeField('signUpNameError', 'Введите имя.'));
    isInvalid = true;
  }
  else if (name < 4 || name > 16) {
    yield put(changeField('signUpNameError', 'Имя должно содержать от 6 до 16 символов.'));
    isInvalid = true;
  }
  else if (!name.match(NAME_TEMPLATE)) {
    yield put(changeField('signUpNameError', 'Допустимы только латинские и кириллические символы, а так же числа.'));
    isInvalid = true;
  }

  if (!email) {
    yield put(changeField('signUpEmailError', 'Введите E-Mail.'));
    isInvalid = true;
  }
  else if (!emailValidator.validate(email)) {
    yield put(changeField('signUpEmailError', 'Введите корректный E-Mail.'));
    isInvalid = true;
  }

  if (!password) {
    yield put(changeField('signUpPasswordError', 'Введите пароль.'));
    isInvalid = true;
  }
  else if (!password.match(PASSWORD_TEMPLATE)) {
    yield put(changeField('signUpPasswordError', 'Допустимы только латинские символы и числа.'));
    isInvalid = true;
  }
  else if (!password || password.length < 6 || password.length > 16) {
    yield put(changeField('signUpPasswordError', 'Пароль должен содержать от 6 до 16 символов.'));
    isInvalid = true;
  }

  if (isInvalid) yield put(signUpFail('Введены некорректные данные'));
  else yield put(signUpRequest({ name, email, password }));
}

export default validation;
