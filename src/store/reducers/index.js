import { combineReducers } from 'redux';
import system from './system';
import map from './map';
import user from './user';
import cities from './cities';
import news from './news';

export default combineReducers({
  system,
  map,
  user,
  cities,
  news,
});
