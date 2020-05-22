import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    color: blue[600],
  },
  paper: {
    marginTop: theme.spacing(1),
    backgroundColor: 'transparent',
  },

  [theme.breakpoints.up('md')]: {
    title: {
      marginTop: theme.spacing(2),
    },
    paper: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(1),
      backgroundColor: '#fff',
      border: '1px solid #cecece',
    },
  },
}));
