import { makeStyles } from '@material-ui/core/styles';
import { ORANGE } from '../../../constants/styles';

export default makeStyles(theme => ({
  root: {
    marginTop: 'auto',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    borderRadius: 0,
    color: ORANGE,
    borderColor: ORANGE,
    borderLeft: 'none',
    borderRight: 'none',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderTop: `1px solid #ccc`,
  },
  userContainerCheck: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  avatar: {
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: ORANGE,
  },
  userButtons: {
    marginLeft: 'auto',
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
}));
