import { select, put } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';
import { requestSettingsAccountData } from '../../AC/settings';
import { NAME_TEMPLATE } from '../../../constants/forms';
import { ROUTE_SETTINGS_NAME } from '../../../api/settings';

function* validate() {
  const { name, currentName } = yield select(({ forms, user }) => ({
    name:        forms.settingsName,
    currentName: user.name,
  }));

  let error = '';

  if (!name) error = 'Введите новое имя.';
  else if (name === currentName) error = 'Придумайте новое имя.';
  else if (name.length < 6 || name.length > 16) error = 'Имя должно содержать от 6 до 16 символов.';
  else if (!name.match(NAME_TEMPLATE)) error = 'Допустимы только латинские и кириллические символы, а так же числа.';

  if (error) {
    yield put(changeField('settingsNameError', error));
  } else {
    yield put(requestSettingsAccountData('Name', name, ROUTE_SETTINGS_NAME));
  }
}

export default validate;