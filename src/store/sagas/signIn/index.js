import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_IN_VALIDATE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from '../../actions/user';
import validation from './validatation';
import request from './request';
import success from './success';
import fail from './fail';

export default function* () {
  yield takeEvery(SIGN_IN_VALIDATE, validation);
  yield takeEvery(SIGN_IN_REQUEST, request);
  yield takeEvery(SIGN_IN_SUCCESS, success);
  yield takeEvery(SIGN_IN_FAIL, fail);
};
