import { makeStyles } from '@material-ui/core/styles';
import { ORANGE } from '../../../constants/styles';

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
  }
}));
