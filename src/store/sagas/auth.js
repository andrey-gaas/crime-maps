import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_UP_REQUEST } from '../actions/auth';
import { ROUTE_SIGN_UP } from '../../api/auth';
import { change } from '../AC/system';

function* request({ data }) {
  try {
    const { name, email, password } = data;
    yield put(change('signUpSnackbar', 'Регистрация нового пользователя...'));
    const result = yield call(axios.post, ROUTE_SIGN_UP, { name, email, password });
    console.log(result);
  } catch(e) {
    console.error(e.message);
  } finally {
    yield put(change('signUpSnackbar', null));
  }
}

export default function* () {
  yield takeEvery(SIGN_UP_REQUEST, request);
};
