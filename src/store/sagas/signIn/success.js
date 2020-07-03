import { put } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';
import { changeSystemField } from '../../AC/system';
import { setUserData } from '../../AC/user';

function* success({ data }) {
  yield put(changeField('signInButtonDisabled', false));
  yield put(changeSystemField('signInSnackbar', ''));
  yield put(changeField('signInEmail', ''));
  yield put(changeField('signInPassword', ''));

  yield put(setUserData(data));
}

export default success;
