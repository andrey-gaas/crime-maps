import { call, put } from 'redux-saga/effects';
import NewsApi from '../../../../../api/news';
import {
  removeNewsSuccess as success,
  removeNewsFail as fail,
} from '../../../../AC/news';

function* request({ id }) {
  try {
    const result = yield call(NewsApi.remove, id);

    if (result.status === 200) {
      yield put(success(id));
    } else {
      yield put(fail(result.status));
    }
  } catch(e) {
    console.error(e.message);
    yield put(fail(500));
  }
}

export default request;
