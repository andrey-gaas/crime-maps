import carTheftIcon from '../../images/newsIcons/car_theft.svg';
import fireIcon from '../../images/newsIcons/fire.svg';
import accidentIcon from '../../images/newsIcons/accident.svg';
import animalIcon from '../../images/newsIcons/animal.svg';
import violenceIcon from '../../images/newsIcons/violence.svg';
import badServicesIcon from '../../images/newsIcons/bad_services.svg';
import deathIcon from '../../images/newsIcons/death.svg';
import dtpIcon from '../../images/newsIcons/dtp.svg';
import lostManIcon from '../../images/newsIcons/lost_man.svg';
import protestIcon from '../../images/newsIcons/protest.svg';
import theftIcon from '../../images/newsIcons/theft.svg';
import disasterIcon from '../../images/newsIcons/disaster.svg';
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

function getSrcIcon(type) {
  switch (type) {
    case CAR_THEFT:
      return carTheftIcon;
    case FIRE:
      return fireIcon;
    case ACCIDENT:
      return accidentIcon;
    case ANIMAL:
      return animalIcon;
    case VIOLENCE:
      return violenceIcon;
    case BAD_SERVICES:
      return badServicesIcon;
    case DEATH:
      return deathIcon;
    case DTP:
      return dtpIcon;
    case LOST_MAN:
      return lostManIcon;
    case PROTEST:
      return protestIcon;
    case THEFT:
      return theftIcon;
    case DISASTER:
      return disasterIcon;
    default:
      return false;
  }
};

export default getSrcIcon
