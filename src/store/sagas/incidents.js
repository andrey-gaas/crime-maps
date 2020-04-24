import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ALL_INCIDENTS } from '../actions/incidents';
import { setError, setLoading, setIncidents } from '../AC/incidents';

function* fetchAllIncidents() {
  try {
    const { data } = yield call(axios.get, '/api/incidents/');
    
    yield put(setError(false));
    yield put(setLoading(false));
    yield put(setIncidents(data));
  } catch(e) {
    console.error(e.message);
    yield put(setError(true));
  }
}

export default function* () {
  yield takeLatest(FETCH_ALL_INCIDENTS, fetchAllIncidents);
};
