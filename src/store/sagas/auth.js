import { takeEvery, call, put, select, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from '../actions/auth';
import { ROUTE_SIGN_UP, ROUTE_SIGN_IN } from '../../api/auth';
import { changeSystemField } from '../AC/system';
import { changeField } from '../AC/forms';
import {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
} from '../AC/auth';

function* signUpRequestSaga() {
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

function* signUpSuccessSaga({ data }) {
  yield put(changeSystemField('signUpSnackbar', ''));
  yield put(changeSystemField('signUpRedirectToSignIn', true));
  yield put(changeSystemField('signInSnackbar', 'Регистрация завершена, можете авторизоваться!'));
  yield put(changeSystemField('signUpRedirectToSignIn', false));
  yield delay(5000);
  yield put(changeSystemField('signInSnackbar', ''));
}

function* signUpFailSaga({ data }) {
  if (data === 'name: lenght')           yield put(changeField('signUpNameError', 'Имя должно содержать от 6 до 16 символов.'));
  else if (data === 'name: invalid')     yield put(changeField('signUpNameError', 'Допустимы только латинские и кириллические символы, а так же числа.'));
  else if (data === 'name: busy')        yield put(changeField('signUpNameError', 'Имя занято, попробуйте другое.'));
  else if (data === 'email: invalid')    yield put(changeField('signUpEmailError', 'Введите корректный E-Mail.'));
  else if (data === 'email: busy')       yield put(changeField('signUpEmailError', 'Указанный E-Mail уже есть в системе. Попробуйте авторизоваться.'));
  else if (data === 'password: length')  yield put(changeField('signUpPasswordError', 'Пароль должен содержать от 6 до 16 символов.'));
  else if (data === 'password: invalid') yield put(changeField('signUpPasswordError', 'Допустимы только латинские символы и числа.'));
  yield put(changeSystemField('signUpSnackbar', ''));
}

function* signInRequestSaga() {
  try {
    const {
      signInEmail: email,
      signInPassword: password,
    } = yield select(({ forms }) => forms);

    yield put(changeSystemField('signInSnackbar', 'Пытаемся войти...'));
    yield put(changeField('signInButtonDisabled', true));

    const { data } = yield call(axios.post, ROUTE_SIGN_IN, { email, password });

    if (data.status === 'success') {
      yield put(changeSystemField('signInSnackbar', 'Успешно!'));
      yield put(signInSuccess(data));
    } else {
      yield put(changeSystemField('signInSnackbar', 'Неудача'));
      yield put(signInFail(data));
    }
  } catch(e) {
    yield put(changeSystemField('signInSnackbar', 'Произошла неизвестная ошибка, попробуйте еще раз.'));
    yield delay(5000);
    yield put(changeSystemField('signInSnackbar', ''));
  } finally {
    yield put(changeField('signInButtonDisabled', false));
  }
}

function* signInSuccessSaga() {
  yield put(changeSystemField('signInSnackbar', ''));
  yield put(changeSystemField('signInRedirectToMain', true));
  yield put(changeSystemField('signInRedirectToMain', false));
}

function* signInFailSaga(data) {
  if (data === 'email: invalid')         yield put(changeField('signUpEmailError', 'Введите корректный E-Mail.'));
  else if (data === 'email: not found')  yield put(changeField('signUpEmailError', 'Пользователь не найден.'));
  else if (data === 'password: invalid') yield put(changeField('signUpEmailError', 'Введите корректный пароль.'));
  else if (data === 'password: wrong')   yield put(changeField('signUpEmailError', 'Пароль не верный.'));
  
  yield put(changeSystemField('signUpSnackbar', ''));
}

export default function* () {
  yield takeEvery(SIGN_UP_REQUEST, signUpRequestSaga);
  yield takeEvery(SIGN_UP_SUCCESS, signUpSuccessSaga);
  yield takeEvery(SIGN_UP_FAIL, signUpFailSaga);
  yield takeEvery(SIGN_IN_REQUEST, signInRequestSaga);
  yield takeEvery(SIGN_IN_SUCCESS, signInSuccessSaga);
  yield takeEvery(SIGN_IN_FAIL, signInFailSaga);
};
