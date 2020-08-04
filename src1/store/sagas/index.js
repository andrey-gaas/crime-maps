import { all } from 'redux-saga/effects';
import user from './user';
import news from './news';
import cabinet from './cabinet';
import cities from './cities';

function* rootSaga() {
  yield all([
    user(),
    news(),
    cabinet(),
    cities(),
  ]);
}

export default rootSaga;
