import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(2),
    color: blue[600],
  },
  firstExpansionPanel: {
    marginTop: theme.spacing(2),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
  },
  [theme.breakpoints.up('md')]: {
    formContainer: {
      flexDirection: 'row',
    },
    field: {
      width: '50%',
    },
    fieldPassword: {
      marginLeft: theme.spacing(1),
      width: '36%',
      '&:first-child': {
        marginLeft: 0,
      }
    },
    button: {
      marginLeft: 'auto',
    },
  },
}));
