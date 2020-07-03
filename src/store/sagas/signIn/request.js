import { call, put } from 'redux-saga/effects';
import { signInSuccess, signInFail } from '../../AC/user';
import UserApi from '../../../api/user';

function* request({ email, password }) {
  const requestBody = { email, password };

  try {
    const response = yield call(UserApi.signIn, requestBody);

    if (response.status === 200) yield put(signInSuccess(response.data));
    else yield put(signInFail(response.data));
  } catch(e) {
    console.error(e);
  }
}

export default request;
