import { CHANGE } from '../actions/forms';

export const changeField = (name, value) => ({ type: CHANGE, name, value});
