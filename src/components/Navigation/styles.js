import { makeStyles } from '@material-ui/core/styles';
import { PRIMARY_COLOR } from '../../constants/styles';

export default makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    minWidth: 0,
  },
  active: {
    color: PRIMARY_COLOR,
  },
}));
