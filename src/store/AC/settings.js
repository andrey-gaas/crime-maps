import {
  VALIDATE_NEW_NAME,
  VALIDATE_NEW_EMAIL,
  VALIDATE_NEW_PASSWORD,
  REQUEST_SETTINGS_ACCOUNT_DATA,
} from '../actions/settings';

export const validateNewName = () => ({ type: VALIDATE_NEW_NAME });
export const validateNewEmail = () => ({ type: VALIDATE_NEW_EMAIL });
export const validateNewPassword = () => ({ type: VALIDATE_NEW_PASSWORD });

export const requestSettingsAccountData = field => ({ type: REQUEST_SETTINGS_ACCOUNT_DATA, field });
