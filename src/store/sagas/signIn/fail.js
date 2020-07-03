import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../AC/system';
import { changeField } from '../../AC/forms';

function* fail({ message }) {
  yield put(changeField('signInButtonDisabled', false));
  yield put(changeSystemField('signInSnackbar', message));
  yield delay(4000);
  yield put(changeSystemField('signInSnackbar', ''));
}

export default fail;
