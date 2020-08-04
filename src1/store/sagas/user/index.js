import { takeEvery } from 'redux-saga/effects';
import * as actions from '../../actions/user';
import signIn from './signIn';
import signUp from './signUp';
import data from './data';
import logout from './logout';

export default function* () {
  yield takeEvery(actions.SIGN_IN_VALIDATE, signIn.validation);
  yield takeEvery(actions.SIGN_IN_REQUEST, signIn.request);
  yield takeEvery(actions.SIGN_IN_SUCCESS, signIn.success);
  yield takeEvery(actions.SIGN_IN_FAIL, signIn.fail);

  yield takeEvery(actions.SIGN_UP_VALIDATE, signUp.validation);
  yield takeEvery(actions.SIGN_UP_REQUEST, signUp.request);
  yield takeEvery(actions.SIGN_UP_SUCCESS, signUp.success);
  yield takeEvery(actions.SIGN_UP_FAIL, signUp.fail);

  yield takeEvery(actions.LOGOUT_USER_REQUEST, logout);

  yield takeEvery(actions.FETCH_USER_DATA, data.request);
  yield takeEvery(actions.FETCH_USER_DATA_SUCCESS, data.success);
}
