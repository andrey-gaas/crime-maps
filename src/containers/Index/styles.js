import { makeStyles } from '@material-ui/core/styles';
import { BLUE_GRADIENT } from '../../constants/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    background: BLUE_GRADIENT,
  },
  link: {
    textDecoration: 'none',
  },
}));
