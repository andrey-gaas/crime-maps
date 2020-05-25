import { all } from 'redux-saga/effects';
import cities from './cities';
import incidents from './incidents';
import auth from './auth';
import settingsName from './settings/name';
import settingsEmail from './settings/email';

function* rootSaga() {
  yield all([
    cities(),
    incidents(),
    auth(),
    settingsName(),
    settingsEmail(),
  ]);
}

export default rootSaga;
