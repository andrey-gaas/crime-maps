import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  signOutButton: {
    display: 'none',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  avatar: {
    marginTop: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  name: {
    marginTop: theme.spacing(1),
    fontSize: '2rem',
  },
  email: {
    marginBottom: theme.spacing(1),
    color: '#888',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    fontSize: '1.5rem',
    color: '#888',
  },
  [theme.breakpoints.up('md')]: {
    signOutButton: {
      display: 'block',
    },
    signOutIconButton: {
      display: 'none',
    },
    paper: {
      marginTop: theme.spacing(3),
      marginLeft: 'auto',
      marginRight: 'auto',
      width: theme.breakpoints.values.sm,
    },
  },
}));
