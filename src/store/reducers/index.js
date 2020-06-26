import { combineReducers } from 'redux';
import map from './map';
import cities from './cities';

export default combineReducers({
  map,
  cities,
});
