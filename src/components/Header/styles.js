import { makeStyles } from '@material-ui/core/styles';
import { WIDTH_PERSON_MENU } from '../../constants/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: theme.zIndex.drawer + 1,
  },
  logoContainer: {
    width: WIDTH_PERSON_MENU,
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    marginLeft: theme.spacing(1),
    fontSize: 18,
    color: '#fff',
  },
}));
