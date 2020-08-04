import { put } from 'redux-saga/effects';
import axios from 'axios';
import { logout } from '../../../AC/user';

function* fail() {
  axios.defaults.headers.common['Authorization'] = '';
  yield put(logout());
}

export default fail;
