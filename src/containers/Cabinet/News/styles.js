import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  newsContainer: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
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
    color: '#999',
  },
}));
