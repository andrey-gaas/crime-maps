import { all } from 'redux-saga/effects';
import signIn from './signIn';
import signUp from './signUp';
import news from './news';
import userData from './userData';

function* rootSaga() {
  yield all([
    signIn(),
    signUp(),
    news(),
    userData(),
  ]);
}

export default rootSaga;
