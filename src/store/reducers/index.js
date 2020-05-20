import { combineReducers } from 'redux';
import system from './system';
import forms from './forms';
import cities from './cities';
import map from './map';
import geodata from './geodata';
import incidents from './incidents';
import incident from './incident';
import user from './user';

export default combineReducers({
  system,
  forms,
  cities,
  map,
  geodata,
  incidents,
  incident,
  user,
});
