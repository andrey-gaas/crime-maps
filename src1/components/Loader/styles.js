import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
}));
