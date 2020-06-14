import { makeStyles } from '@material-ui/core/styles';
import { WIDTH_PERSON_MENU } from '../../constants/styles';

export default makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: WIDTH_PERSON_MENU,
    },
  },
  drawerPaper: {
    width: WIDTH_PERSON_MENU,
  },
  logo: {
    width: 25,
  },
  logoTextContainer: {
    marginLeft: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    fontWeight: 'bold',
  },
}));
