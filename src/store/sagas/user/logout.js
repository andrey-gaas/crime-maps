import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import UserApi from '../../../api/user';
import { logout } from '../../AC/user';

function* logoutRequest() {
  axios.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('role');

  try {
    const result = yield call(UserApi.logout);

    if (result.status === 200) {
      yield put(logout());
    }
  } catch(e) {
    console.error(e.message);
  }
}

export default logoutRequest;
