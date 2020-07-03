import { all } from 'redux-saga/effects';
import signIn from './signIn';
import signUp from './signUp';

function* rootSaga() {
  yield all([
    signIn(),
    signUp(),
  ]);
}

export default rootSaga;
