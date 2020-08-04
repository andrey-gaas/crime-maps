import { CHANGE_FIELD } from '../actions/forms';

export const changeField = (name, value) => ({ type: CHANGE_FIELD, name, value});
