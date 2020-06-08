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

  [theme.breakpoints.up('md')]: {
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}));
