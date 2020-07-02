import { combineReducers } from 'redux';
import map from './map';
import cities from './cities';
import user from './user';

export default combineReducers({
  map,
  cities,
  user,
});
