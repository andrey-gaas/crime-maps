import { makeStyles } from '@material-ui/core/styles';
import { PRIMARY_COLOR } from '../../constants/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '24%',
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
      opacity: .7,
    },
  },
  imageContainer: {
    padding: theme.spacing(1) * 1.5,
    width: '100%',
    background: '#000',
    borderRadius: '50%',
  },
  label: {
    marginTop: theme.spacing(1),
    fontSize: 12,
  },
  active: {
    background: PRIMARY_COLOR,
  },
}));
