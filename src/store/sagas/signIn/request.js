import { call } from 'redux-saga/effects';
import axios from 'axios';
import UserApi from '../../../api/user';

function* request({ email, password }) {
  const requestBody = { email, password };

  try {
    const result = yield call(UserApi.signInRequest, requestBody);
    console.log(result);
  } catch(e) {
    console.log(e);
  }
}

export default request;
