import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_UP_VALIDATE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from '../../actions/user';
import validation from './validation';
import request from './request';
import success from './success';
import fail from './fail';

export default function* () {
  yield takeEvery(SIGN_UP_VALIDATE, validation);
  yield takeEvery(SIGN_UP_REQUEST, request);
  yield takeEvery(SIGN_UP_SUCCESS, success);
  yield takeEvery(SIGN_UP_FAIL, fail);
};