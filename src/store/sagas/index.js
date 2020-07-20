import { all } from 'redux-saga/effects';
import signIn from './signIn';
import signUp from './signUp';
import news from './news';
import userData from './userData';
import cabinet from './cabinet';
import cities from './cities';

function* rootSaga() {
  yield all([
    signIn(),
    signUp(),
    news(),
    userData(),
    cabinet(),
    cities(),
  ]);
}

export default rootSaga;
