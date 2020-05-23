import { select, put } from 'redux-saga/effects';
import { changeField } from '../../AC/forms';
import { requestSettingsAccountData } from '../../AC/settings';
import { PASSWORD_TEMPLATE } from '../../../constants/forms';
import { ROUTE_SETTINGS_PASSWORD } from '../../../api/settings';

function* validate() {
  const { oldPassword, newPassword } = yield select(({ forms }) => ({
    oldPassword: forms.settingsOldPassword,
    newPassword: forms.settingsNewPassword,
  }));

  let oldPasswordError = '';
  let newPasswordError = '';

  if (!oldPassword) oldPasswordError = 'Введите текущий пароль.';
  else if (oldPassword.length < 6 || oldPassword.length > 16) oldPasswordError = 'Старый пароль указан не верно.';
  else if (!oldPassword.match(PASSWORD_TEMPLATE)) oldPasswordError = 'Старый пароль указан не верно.';


  else if (!newPassword) newPasswordError = 'Введите новый пароль.';
  else if (newPassword.length < 6 || newPassword.length > 16) newPasswordError = 'Пароль должен содержать от 6 до 16 символов.';
  else if (!newPassword.match(PASSWORD_TEMPLATE)) newPasswordError = 'Допустимы только латинские символы и числа.';
  else if (newPassword === oldPassword) newPasswordError = 'Придумайте новый пароль';

  if (oldPasswordError || newPasswordError) {
    yield put(changeField('settingsOldPasswordError', oldPasswordError));
    yield put(changeField('settingsNewPasswordError', newPasswordError));
  } else {
    yield put(requestSettingsAccountData('Password', { newPassword, oldPassword }, ROUTE_SETTINGS_PASSWORD));
  }
}

export default validate;