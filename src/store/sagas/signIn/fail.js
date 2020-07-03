import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../AC/system';

function* fail({ message }) {
  yield put(changeSystemField('signInSnackbar', message));
  yield delay(4000);
  yield put(changeSystemField('signInSnackbar', ''));
}

export default fail;
