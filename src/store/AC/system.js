import { CHANGE } from '../actions/system';

export const change = (name, value) => ({ type: CHANGE, name, value });
