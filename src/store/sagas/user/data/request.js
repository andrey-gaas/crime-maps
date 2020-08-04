import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import cookie from 'js-cookie';
import UserApi from '../../../../api/user';
import {
  fetchUserDataSuccess as success,
  fetchUserDataFail    as fail,
} from '../../../AC/user';

function* request() {
  const token = cookie.get('token');
  axios.defaults.headers.common['Authorization'] = token;

  try {
    const result = yield call(UserApi.fetchUserData);
    if (result.status === 200) yield put(success(result.data));
    else yield put(fail());
  } catch(e) {
    console.error(e.message);
  }
}

export default request;
