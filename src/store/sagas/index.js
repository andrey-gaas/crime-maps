import { all } from 'redux-saga/effects';
import cities from './cities';
import incidents from './incidents';

function* rootSaga() {
  yield all([
    cities(),
    incidents(),
  ]);
}

export default rootSaga;
