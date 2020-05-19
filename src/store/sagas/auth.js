import { takeEvery, call, put, select, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from '../actions/auth';
import { ROUTE_SIGN_UP } from '../../api/auth';
import { change } from '../AC/system';
import { signUpSuccess, signUpFail } from '../AC/auth';

function* request({ data }) {
  try {
    const {
      signUpName: name,
      signUpEmail: email,
      signUpPassword: password,
    } = yield select(({ forms }) => forms);
    yield put(change('signUpSnackbar', 'Регистрация нового пользователя...'));
    const result = yield call(axios.post, ROUTE_SIGN_UP, { name, email, password });
    
    if (result.status === 201) {
      yield put(change('signUpSnackbar', 'Регистрация завершена!'));
      signUpSuccess(result.data);
      yield delay(5000);
      yield put(change('signUpSnackbar', ''));
    } else {
      signUpFail(result.data);
    }
    
  } catch(e) {
    yield put(change('signUpSnackbar', 'Произошла неизвестная ошибка, попробуйте еще раз.'));
    yield delay(5000);
    yield put(change('signUpSnackbar', ''));
  }
}

function* success(data) {
  console.log(data);
}

function* fail(data) {
  console.log(data);
}

export default function* () {
  yield takeEvery(SIGN_UP_REQUEST, request);
  yield takeEvery(SIGN_UP_SUCCESS, success);
  yield takeEvery(SIGN_UP_FAIL, fail);

};
