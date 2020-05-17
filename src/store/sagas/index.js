import { all } from 'redux-saga/effects';
import cities from './cities';
import incidents from './incidents';
import auth from './auth';

function* rootSaga() {
  yield all([
    cities(),
    incidents(),
    auth(),
  ]);
}

export default rootSaga;
