import { put, delay } from 'redux-saga/effects';
import { changeSystemField } from '../../../../AC/system';

function* success() {
  yield put(changeSystemField('createNewsRequestStatus', 'success'));
  yield delay(1000);
  yield put(changeSystemField('createNewsRequestStatus', ''));

}

export default success;
