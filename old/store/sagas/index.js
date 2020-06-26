import { all } from 'redux-saga/effects';
import cities from './cities';
import incidents from './incidents';
import auth from './auth';
import settingsName from './settings/name';
import settingsEmail from './settings/email';
import settingsPassword from './settings/password';

function* rootSaga() {
  yield all([
    cities(),
    incidents(),
    auth(),
    settingsName(),
    settingsEmail(),
    settingsPassword(),
  ]);
}

export default rootSaga;
