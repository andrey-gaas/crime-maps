import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
  },
  listContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));
