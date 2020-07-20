import { put } from 'redux-saga/effects';
import { setCities, setLoading } from '../../AC/cities';

function* success({ data }) {
  yield put(setCities(data));
  yield put(setLoading(false));
}

export default success;
