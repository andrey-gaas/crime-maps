import { put, call, delay } from 'redux-saga/effects';
import CabinetApi from '../../../../api/cabinet';
import { cabinetUsersSuccess, cabinetUsersFail } from '../../../AC/cabinet';
import { changeSystemField } from '../../../AC/system';

function* fetch({ name }) {
  yield delay(700);
  try {
    yield put(changeSystemField('cabinetUsersLoading', true));

    const result = yield call(CabinetApi.fetchUsers, name);
    console.log(result);
    if (result.status === 200) {
      yield put(cabinetUsersSuccess(result.data));
    } else {
      yield put(cabinetUsersFail('Ошибка загрузки списка пользователей.'));
    }
  } catch(e) {
    console.error(e.message);
    yield put(changeSystemField('cabinetUsersLoading', false));
  }
}

export default fetch;
