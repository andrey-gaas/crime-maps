import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    padding: 0,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  field: {
    marginTop: theme.spacing(2),
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  dialogTitle: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    bottom: theme.spacing(1),
  },
  dialogContent: {
    padding: 0,
    height: 400,
  },

  [theme.breakpoints.up('md')]: {
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}));
