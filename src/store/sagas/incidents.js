import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ALL_INCIDENTS } from '../actions/incidents';
import { setError, setLoading, setIncidents } from '../AC/incidents';

function* fetchIncidents(props) {
  const cityId = props.id;
  try {
    const { cities } = yield select(({ cities }) => ({
      cities: cities.data,
    }));
    const { title: city } = cities.find(city => city.id === cityId);
    const { data } = yield call(axios.get, `/api/incidents/${city}`);
    
    yield put(setError(false));
    yield put(setLoading(false));
    yield put(setIncidents(data));
  } catch(e) {
    console.error(e.message);
    yield put(setError(true));
  }
}

export default function* () {
  yield takeLatest(FETCH_ALL_INCIDENTS, fetchIncidents);
};
