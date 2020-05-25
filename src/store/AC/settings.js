import {
  VALIDATE_NEW_NAME,
  REQUEST_NEW_NAME,
  SUCCESS_NEW_NAME,
  FAIL_NEW_NAME,

  VALIDATE_NEW_EMAIL,
  REQUEST_NEW_EMAIL,
  SUCCESS_NEW_EMAIL,
  FAIL_NEW_EMAIL,

  VALIDATE_NEW_PASSWORD,
} from '../actions/settings';

export const validateNewName = () => ({ type: VALIDATE_NEW_NAME });
export const requestNewName = name => ({ type: REQUEST_NEW_NAME, name });
export const successNewName = name => ({ type: SUCCESS_NEW_NAME, name });
export const failNewName = message => ({ type: FAIL_NEW_NAME, message });

export const validateNewEmail = () => ({ type: VALIDATE_NEW_EMAIL });
export const requestNewEmail = email => ({ type: REQUEST_NEW_EMAIL, email });
export const successNewEmail = email => ({ type: SUCCESS_NEW_EMAIL, email });
export const failNewEmail = message => ({ type: FAIL_NEW_EMAIL, message });

export const validateNewPassword = () => ({ type: VALIDATE_NEW_PASSWORD });
