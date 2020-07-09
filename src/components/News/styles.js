import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  titleContainer: {
    position: 'relative',
    backgroundColor: '#eee',
    borderBottom: '1px solid #cecece',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  date: {
    color: '#aaa',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  views: {
    display: 'flex',
    alignItems: 'center',
    color: '#aaa',
  },
  viewsIcon: {
    marginLeft: theme.spacing(1),
  },
  sourcesContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  sourceBorder: {
    marginBottom: theme.spacing(1),
    borderBottom: '1px solid #cecece',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.up('md')]: {
    container: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  }
}));
