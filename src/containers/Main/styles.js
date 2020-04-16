import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  buttonUserPosition: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000
  },
}));
