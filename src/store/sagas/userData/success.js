import { put } from 'redux-saga/effects';
import { setUserData } from '../../AC/user';

function* success({ data }) {
  yield put(setUserData(data));
}

export default success;
