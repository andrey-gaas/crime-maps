import { all } from 'redux-saga/effects';
import cities from './cities';
import incidents from './incidents';
import auth from './auth';
import settings from './settings';

function* rootSaga() {
  yield all([
    cities(),
    incidents(),
    auth(),
    settings(),
  ]);
}

export default rootSaga;
