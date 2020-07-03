import { all } from 'redux-saga/effects';
import signIn from './signIn';

function* rootSaga() {
  yield all([
    signIn(),
  ]);
}

export default rootSaga;
