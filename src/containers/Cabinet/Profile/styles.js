import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  profileTitle: {
    marginBottom: theme.spacing(3),
  },
  row: {
    display: 'flex',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  label: {
    marginRight: theme.spacing(1),
  },
}));
