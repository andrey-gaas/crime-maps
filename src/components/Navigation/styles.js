import { makeStyles } from '@material-ui/core/styles';

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
}));
