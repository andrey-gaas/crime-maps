import { put } from 'redux-saga/effects';
import axios from 'axios';
import cookie from 'js-cookie';
import { changeField } from '../../AC/forms';
import { changeSystemField } from '../../AC/system';
import { setUserData } from '../../AC/user';

function* success({ data }) {
  const token = cookie.get('token');
  axios.defaults.headers.common['Authorization'] = token;
  yield put(changeField('signInButtonDisabled', false));
  yield put(changeSystemField('snackbar', ''));
  yield put(changeField('signInEmail', ''));
  yield put(changeField('signInPassword', ''));

  yield put(setUserData(data));
}

export default success;
