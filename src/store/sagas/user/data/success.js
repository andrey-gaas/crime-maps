import { put } from 'redux-saga/effects';
import { setUserData } from '../../../AC/user';

function* success({ data }) {
  localStorage.setItem('role', data.role);
  yield put(setUserData(data));
}

export default success;
