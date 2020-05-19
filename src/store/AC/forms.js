import { CHANGE } from '../actions/froms';

export const changeField = (name, value) => ({ type: CHANGE, name, value});
