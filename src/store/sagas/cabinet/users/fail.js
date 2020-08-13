import { put, delay } from 'redux-saga/effects';
import { setCabinetUsers } from '../../../AC/cabinet';
import { changeSystemField } from '../../../AC/system';

function* fail({ message }) {
  yield put(changeSystemField('cabinetUsersLoading', false));
  yield put(setCabinetUsers([]));
  yield put(changeSystemField('snackbar', message));
  yield delay(5000);
  yield put(changeSystemField('snackbar', ''));
}

export default fail;
