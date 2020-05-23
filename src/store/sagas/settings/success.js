import { put, delay } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';
import { setUserField } from '../../AC/user';
import { changeSystemField } from '../../AC/system';

function* success({ field, message, value }) {
  yield put(changeField(`settings${field}`, ''));
  yield put(setUserField(field.toLowerCase(), value));
  yield put(changeSystemField('settingSnackbar', message));
  yield delay(5000);
  yield put(changeSystemField('settingSnackbar', ''));
}

export default success;
