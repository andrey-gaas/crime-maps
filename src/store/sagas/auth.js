import { takeEvery, call, put, select, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from '../actions/auth';
import { ROUTE_SIGN_UP } from '../../api/auth';
import { changeSystemField } from '../AC/system';
import { changeField } from '../AC/forms';
import { signUpSuccess, signUpFail } from '../AC/auth';

function* request() {
  try {
    const {
      signUpName: name,
      signUpEmail: email,
      signUpPassword: password,
    } = yield select(({ forms }) => forms);
    yield put(changeSystemField('signUpSnackbar', 'Регистрация нового пользователя...'));
    yield put(changeField('signUpButtonDisabled', true));
    const result = yield call(axios.post, ROUTE_SIGN_UP, { name, email, password });

    if (result.status === 201) {
      yield put(signUpSuccess(result.data));
    } else {
      yield put(signUpFail(result.data));
    }
    
  } catch(e) {
    yield put(changeSystemField('signUpSnackbar', 'Произошла неизвестная ошибка, попробуйте еще раз.'));
    yield delay(5000);
    yield put(changeSystemField('signUpSnackbar', ''));
  } finally {
    yield put(changeField('signUpButtonDisabled', false));
  }
}

function* success({ data }) {
  yield put(changeSystemField('signUpSnackbar', ''));
  yield put(changeSystemField('signUpRedirectToSignIn', true));
  yield put(changeSystemField('signInSnackbar', 'Регистрация завершена!'));
  yield put(changeSystemField('signUpRedirectToSignIn', false));
  yield delay(5000);
  yield put(changeSystemField('signInSnackbar', ''));
}

function* fail({ data }) {
  if (data === 'name: lenght')           yield put(changeField('signUpNameError', 'Имя должно содержать от 6 до 16 символов.'));
  else if (data === 'name: invalid')     yield put(changeField('signUpNameError', 'Допустимы только латинские и кириллические символы, а так же числа.'));
  else if (data === 'name: busy')        yield put(changeField('signUpNameError', 'Имя занято, попробуйте другое.'));
  else if (data === 'email: invalid')    yield put(changeField('signUpEmailError', 'Введите корректный E-Mail.'));
  else if (data === 'email: busy')       yield put(changeField('signUpEmailError', 'Указанный E-Mail уже есть в системе. Попробуйте авторизоваться.'));
  else if (data === 'password: length')  yield put(changeField('signUpPasswordError', 'Пароль должен содержать от 6 до 16 символов.'));
  else if (data === 'password: invalid') yield put(changeField('signUpPasswordError', 'Допустимы только латинские символы и числа.'));
  yield put(changeSystemField('signUpSnackbar', ''));
}

export default function* () {
  yield takeEvery(SIGN_UP_REQUEST, request);
  yield takeEvery(SIGN_UP_SUCCESS, success);
  yield takeEvery(SIGN_UP_FAIL, fail);
};
