import { combineReducers } from 'redux';
import map from './map';
import cities from './cities';
import user from './user';
import system from './system';
import forms from './forms';
import news from './news';
import cabinet from './cabinet';

export default combineReducers({
  map,
  cities,
  user,
  system,
  forms,
  news,
  cabinet,
});
