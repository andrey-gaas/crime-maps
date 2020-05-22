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
  avatar: {
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: ORANGE,
  },
  userButtons: {
    marginLeft: 'auto',
  },
}));
