import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  buttonUserPosition: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1000,
  },
  zoomButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1000,
  },
  buttonZoomOut: {
    marginTop: theme.spacing(1),
  },
  [theme.breakpoints.up('md')]: {
    buttonUserPosition: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    zoomButtonsContainer: {
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
    buttonZoomOut: {
      marginTop: theme.spacing(1),
    },
  },
}));
