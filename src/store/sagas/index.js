import { all } from 'redux-saga/effects';
import signIn from './signIn';
import signUp from './signUp';
import news from './news';
import userData from './userData';
import cabinet from './cabinet';

function* rootSaga() {
  yield all([
    signIn(),
    signUp(),
    news(),
    userData(),
    cabinet(),
  ]);
}

export default rootSaga;
