import L from 'leaflet';
import userIcon from '../../images/pins/user.svg';
import carTheftIcon from '../../images/pins/car_theft.svg';
import fireIcon from '../../images/pins/fire.svg';
import {
  CAR_THEFT,
  FIRE,
} from '../../constants/incidents';

export default function getIcon(type) {
  let iconUrl;
  switch (type) {
    case CAR_THEFT:
      iconUrl = carTheftIcon;
      break;
    case FIRE:
      iconUrl = fireIcon;
      break;
    default:
      iconUrl = userIcon;
  }

  return new L.Icon({
    iconUrl,
    iconSize: new L.Point(40, 60),
    iconAnchor: [20, 60]
  });
};
