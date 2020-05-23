import {
  VALIDATE_NEW_NAME,
  VALIDATE_NEW_EMAIL,
  VALIDATE_NEW_PASSWORD,
  REQUEST_SETTINGS_ACCOUNT_DATA,
  SETTINGS_ACCOUNT_SUCCESS,
  SETTINGS_ACCOUNT_FAIL,
} from '../actions/settings';

export const validateNewName = () => ({ type: VALIDATE_NEW_NAME });
export const validateNewEmail = () => ({ type: VALIDATE_NEW_EMAIL });
export const validateNewPassword = () => ({ type: VALIDATE_NEW_PASSWORD });

export const request = (field, value, path) => ({ type: REQUEST_SETTINGS_ACCOUNT_DATA, field, value, path });
export const success = (field, message, value) => ({ type: SETTINGS_ACCOUNT_SUCCESS, field, message, value });
export const fail = (field, text) => ({ type: SETTINGS_ACCOUNT_FAIL, field, text });
