import { makeStyles } from '@material-ui/core/styles';
import { BLUE_GRADIENT } from '../../constants/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: BLUE_GRADIENT,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    color: '#fff',
    textTransform: 'uppercase',
  },
  logo: {
    marginLeft: theme.spacing(1),
    height: 30,
  },
  paper: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  form: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  textField: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(3),
  },
  grayText: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
    color: '#999',
  },
  link: {
    textDecoration: 'none',
  },
  linkButton: {
    marginTop: theme.spacing(1),
  },
  underContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
  backButton: {
    color: '#fff',
  },

  [theme.breakpoints.up('sm')]: {
    root: {
      alignItems: 'center',
    },
    paper: {
      width: theme.breakpoints.width('sm'),
    },
    underContainer: {
      justifyContent: 'flex-end',
      width: theme.breakpoints.width('sm'),
    },
  }
}));
