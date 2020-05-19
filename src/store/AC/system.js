import { CHANGE_SYSTEM_FIELD } from '../actions/system';

export const changeSystemField = (name, value) => ({ type: CHANGE_SYSTEM_FIELD, name, value });
