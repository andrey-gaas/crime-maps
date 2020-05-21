import { makeStyles } from '@material-ui/core/styles';
import { ORANGE, BLUE_GRADIENT } from '../../../constants/styles';

export default makeStyles(theme => ({
  root: {
    marginTop: 'auto',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    borderRadius: 0,
    color: ORANGE,
    borderColor: ORANGE,
    borderLeft: 'none',
    borderRight: 'none',
  },
  userContainer: {
    display: 'flex',
    padding: theme.spacing(1),
    backgroundImage: BLUE_GRADIENT,
    color: '#fff',
  },
  userButtons: {
    marginLeft: 'auto',
  },
  icon: {
    color: '#fff',
  },
}));
