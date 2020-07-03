import { put } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';
import { changeSystemField } from '../../AC/system';
import { setUserData } from '../../AC/user';

function* success({ data }) {
  yield put(changeField('signUpButtonDisabled', false));
  yield put(changeSystemField('signUpSnackbar', ''));
  yield put(changeField('signUpName', ''));
  yield put(changeField('signUpEmail', ''));
  yield put(changeField('signUpPassword', ''));

  yield put(setUserData(data));
}

export default success;
