import { combineReducers } from 'redux';
import system from './system';
import cities from './cities';
import map from './map';
import geodata from './geodata';
import incidents from './incidents';
import incident from './incident';

export default combineReducers({
  system,
  cities,
  map,
  geodata,
  incidents,
  incident,
});
