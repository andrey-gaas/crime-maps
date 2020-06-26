import { makeStyles } from '@material-ui/core/styles';
import { WIDTH_PERSON_MENU } from '../../constants/styles';

export default makeStyles(theme => ({
  linkMenu: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  [theme.breakpoints.up('md')]: {
    content: {
      marginLeft: WIDTH_PERSON_MENU,
    },
  },
}));
