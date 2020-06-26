import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  titleContainer: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },

  /* Info */
  textField: {
    marginTop: theme.spacing(2),
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  /* Position */
  positionSearch: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  streetField: {
    flexGrow: 3,
  },
  homeField: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
  mapContainer: {
    marginTop: theme.spacing(1),
    height: 400,
  },

  /* Source */
  sourceForm: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  sourceName: {
    flexGrow: 3,
  },
  sourceLink: {
    marginLeft: theme.spacing(3),
    flexGrow: 3,
  },
  sourceButton: {
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  },
  sourceChip: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));
