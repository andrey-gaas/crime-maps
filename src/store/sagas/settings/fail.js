import { put } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';

function* fail({ field, text }) {
  yield put(changeField(field, text));
}

export default fail;
