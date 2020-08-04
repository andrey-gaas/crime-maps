import { put, call } from 'redux-saga/effects';
import CitiesApi from '../../../api/cities';
import { fetchSuccess, fetchFail } from '../../AC/cities';

function* fetch() {
  try {
    const result = yield call(CitiesApi.fetch);
    if (result.status === 200) yield put(fetchSuccess(result.data));
    else yield put(fetchFail());
  } catch(e) {
    console.error(e.message);
  }
}

export default fetch;
