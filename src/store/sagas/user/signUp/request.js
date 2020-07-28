import { call, put } from 'redux-saga/effects';
import { signUpSuccess, signUpFail } from '../../../AC/user';
import UserApi from '../../../../api/user';

function* request({ requestBody }) {
  try {
    const response = yield call(UserApi.signUp, requestBody);

    if (response.status === 201) yield put(signUpSuccess(response.data));
    else yield put(signUpFail(response.data));
  } catch(e) {
    console.error(e);
  }
}

export default request;
