import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3),
  },
  addButton: {
    marginLeft: 'auto',
  },
  loadingText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotate: {
    marginLeft: theme.spacing(1),
    animation: '$rotate 1s infinite',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(-360deg)',
    },
  },
}));
