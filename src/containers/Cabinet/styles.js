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
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    fontSize: '1.5em',
    color: '#888',
  },
}));
