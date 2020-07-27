import { put, delay } from 'redux-saga/effects';
import { removeNews } from '../../../../AC/news';
import { changeSystemField } from '../../../../AC/system';

function* success({ id }) {
  yield put(removeNews(id));
  yield put(changeSystemField('snackbar', 'Новость удалена.'));
  yield delay(4000);
  yield put(changeSystemField('snackbar', ''));
}

export default success;
