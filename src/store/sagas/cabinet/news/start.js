import { put } from 'redux-saga/effects';
import {} from '../../../AC/news';
import { changeSystemField } from '../../../AC/system';

function* start() {
  yield put(changeSystemField('cabinetNewsLoading', false));
}

export default start;
