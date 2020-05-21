import { takeEvery, call, put, select, delay } from 'redux-saga/effects';
import axios from 'axios';
import cookie from 'js-cookie';
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
import { loginUser, setUser, logoutUser } from '../AC/user';
import {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
} from '../AC/auth';
import { LOGIN_USER, LOGOUT_USER_SAGA } from '../actions/user';

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
      yield put(signUpSuccess());
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

function* signUpSuccessSaga() {
  yield put(changeSystemField('signUpSnackbar', ''));
  yield put(changeField('signUpName', ''));
  yield put(changeField('signUpEmail', ''));
  yield put(changeField('signUpPassword', ''));
  yield put(loginUser());
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

    if (data === 'OK') {
      yield put(signInSuccess());
    } else {
      yield put(changeSystemField('signInSnackbar', 'Вход не выполнен. Попробуйте еще раз.'));
      yield put(signInFail(data));
    }
  } catch(e) {
    yield put(changeField('signInButtonDisabled', false));
    yield put(changeSystemField('signInSnackbar', 'Произошла неизвестная ошибка, попробуйте еще раз.'));
    yield delay(5000);
    yield put(changeSystemField('signInSnackbar', ''));
  }
}

function* signInSuccessSaga() {
  yield put(changeField('signInButtonDisabled', false));
  yield put(changeSystemField('signInSnackbar', ''));
  yield put(changeField('signInEmail', ''));
  yield put(changeField('signInPassword', ''));
  yield put(loginUser());
}

function* signInFailSaga({ data }) {
  if (data === 'email: invalid')         yield put(changeField('signInEmailError', 'Введите корректный E-Mail.'));
  else if (data === 'email: not found')  yield put(changeField('signInEmailError', 'Пользователь не найден.'));
  else if (data === 'password: invalid') yield put(changeField('signInEmailError', 'Введите корректный пароль.'));
  else if (data === 'password: wrong')   yield put(changeField('signInEmailError', 'Пароль не верный.'));
  yield put(changeField('signInButtonDisabled', false));
  yield delay(3000);
  yield put(changeSystemField('signInSnackbar', ''));
}

function* login() {
  const name = cookie.get('user-name');
  const email = cookie.get('user-email');
  const id = +cookie.get('user-id');
  yield put(setUser({ name, email, id }));
}

function* logout() {
  localStorage.setItem('token', null);
  yield put(logoutUser());
}

export default function* () {
  yield takeEvery(SIGN_UP_REQUEST, signUpRequestSaga);
  yield takeEvery(SIGN_UP_SUCCESS, signUpSuccessSaga);
  yield takeEvery(SIGN_UP_FAIL, signUpFailSaga);
  yield takeEvery(SIGN_IN_REQUEST, signInRequestSaga);
  yield takeEvery(SIGN_IN_SUCCESS, signInSuccessSaga);
  yield takeEvery(SIGN_IN_FAIL, signInFailSaga);
  yield takeEvery(LOGIN_USER, login);
  yield takeEvery(LOGOUT_USER_SAGA, logout);
};
