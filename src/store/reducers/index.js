import { combineReducers } from 'redux';
import cities from './cities';
import map from './map';
import geodata from './geodata';

export default combineReducers({
  cities,
  map,
  geodata,
});
