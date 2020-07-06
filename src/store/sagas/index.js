import { all } from 'redux-saga/effects';
import signIn from './signIn';
import signUp from './signUp';
import news from './news';

function* rootSaga() {
  yield all([
    signIn(),
    signUp(),
    news(),
  ]);
}

export default rootSaga;
