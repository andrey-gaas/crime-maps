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
}));
