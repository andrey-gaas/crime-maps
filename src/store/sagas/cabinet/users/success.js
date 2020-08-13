import { put } from 'redux-saga/effects';
import { setCabinetUsers } from '../../../AC/cabinet';
import { changeSystemField } from '../../../AC/system';

function* success({ users }) {
  yield put(setCabinetUsers(users));
  yield put(changeSystemField('cabinetUsersLoading', false));
}

export default success;
