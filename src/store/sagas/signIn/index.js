import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_IN_VALIDATE,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
} from '../../actions/user';
import validation from './validatation';
import request from './request';
import fail from './fail';

export default function* () {
  yield takeEvery(SIGN_IN_VALIDATE, validation);
  yield takeEvery(SIGN_IN_REQUEST, request);
  yield takeEvery(SIGN_IN_FAIL, fail);
};
