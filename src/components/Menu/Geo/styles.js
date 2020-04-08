import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(3),
    overflowX: 'hidden'
  },
  cityName: {
    color: '#fff'
  },
  emblem: {
    marginRight: theme.spacing(1)
  }
}));
