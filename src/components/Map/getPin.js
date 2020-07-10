import L from 'leaflet';
import userIcon from '../../images/pins/user.svg';
import carTheftIcon from '../../images/pins/car_theft.svg';
import fireIcon from '../../images/pins/fire.svg';
import accidentIcon from '../../images/pins/accident.svg';
import animalIcon from '../../images/pins/animal.svg';
import violenceIcon from '../../images/pins/violence.svg';
import badServicesIcon from '../../images/pins/bad_services.svg';
import deathIcon from '../../images/pins/death.svg';
import dtpIcon from '../../images/pins/dtp.svg';
import lostManIcon from '../../images/pins/lost_man.svg';
import protestIcon from '../../images/pins/protest.svg';
import theftIcon from '../../images/pins/theft.svg';
import disasterIcon from '../../images/pins/disaster.svg';
import {
  CAR_THEFT,
  FIRE,
  ACCIDENT,
  ANIMAL,
  VIOLENCE,
  BAD_SERVICES,
  DEATH,
  DTP,
  LOST_MAN,
  PROTEST,
  THEFT,
  DISASTER,
} from '../../constants/news';

export default function getIcon(type) {
  let iconUrl;
  switch (type) {
    case CAR_THEFT:
      iconUrl = carTheftIcon; break;
    case FIRE:
      iconUrl = fireIcon; break;
    case ACCIDENT:
      iconUrl = accidentIcon; break;
    case ANIMAL:
      iconUrl = animalIcon; break;
    case VIOLENCE:
      iconUrl = violenceIcon; break;
    case BAD_SERVICES:
      iconUrl = badServicesIcon; break;
    case DEATH:
      iconUrl = deathIcon; break;
    case DTP:
      iconUrl = dtpIcon; break;
    case LOST_MAN:
      iconUrl = lostManIcon; break;
    case PROTEST:
      iconUrl = protestIcon; break;
    case THEFT:
      iconUrl = theftIcon; break;
    case DISASTER:
      iconUrl = disasterIcon; break;
    default:
      iconUrl = userIcon;
  }

  return new L.Icon({
    iconUrl,
    iconSize: new L.Point(36, 60),
    iconAnchor: [18, 60]
  });
};
