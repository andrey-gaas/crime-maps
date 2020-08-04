import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  newsContainer: {
    margin: theme.spacing(2),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  selectContainer: {
    '& > div': {
      width: 300,
    },
  },
  loadingText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    color: '#999',
  },
}));
