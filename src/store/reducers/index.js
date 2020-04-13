import { combineReducers } from 'redux';
import cities from './cities';
import map from './map';

export default combineReducers({
  cities,
  map,
});
