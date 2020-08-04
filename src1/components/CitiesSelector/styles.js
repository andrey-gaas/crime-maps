import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  title: {
    position: 'relative',
    backgroundColor: '#eee',
    borderBottom: '1px solid #cecece',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  loadingText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotate: {
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
  actions: {
    backgroundColor: '#eee',
    borderTop: '1px solid #cecece',
  },
}));
