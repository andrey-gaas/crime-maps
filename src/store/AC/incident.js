import {
  OPEN_INCIDENT,
  CLOSE_INCIDENT,
} from '../actions/incident';

export const openIncident = incident => ({ type: OPEN_INCIDENT, incident });
export const closeIncident = () => ({ type: CLOSE_INCIDENT });
