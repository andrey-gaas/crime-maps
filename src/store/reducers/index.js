import { combineReducers } from 'redux';
import system from './system';
import map from './map';
import user from './user';

export default combineReducers({
  system,
  map,
  user,
});
