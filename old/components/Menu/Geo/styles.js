import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    margin: theme.spacing(1),
  },
  cityName: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text,
  },
  emblemContainer: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  changeCityButton: {
    color: theme.palette.text,
  },

  [theme.breakpoints.up('md')]: {
    root: {
      margin: theme.spacing(3),
    },
    cityName: {
      color: '#fff',
    },
    emblemContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      background: '#fff',
      borderRadius: '50%',
    },
    emblem: {
      height: 30,
    },
    changeCityButton: {
      color: '#fff',
    }
  },
}));
