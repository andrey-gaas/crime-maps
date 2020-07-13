import { takeEvery } from 'redux-saga/effects';
import { FETCH_USER_DATA, FETCH_USER_DATA_SUCCESS } from '../../actions/user';
import request from './request';
import success from './success';

export default function* () {
  yield takeEvery(FETCH_USER_DATA, request);
  yield takeEvery(FETCH_USER_DATA_SUCCESS, success);
};
