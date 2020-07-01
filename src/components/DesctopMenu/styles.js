import { makeStyles } from '@material-ui/core/styles';
import backgrounds from '../../other/cityBackgrounds';
import { WIDTH_MENU as drawerWidth, PRIMARY_COLOR } from '../../constants/styles';

export default makeStyles(theme => ({
  root: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    ...backgrounds,
    root: {
      display: 'block',
      width: drawerWidth,
      flexShrink: 0
    },
    rootPaper: {
      width: drawerWidth
    },
    subscriptionsContainer: {
      marginTop: theme.spacing(1),
    },
    subscriptionsLink: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      fontSize: theme.typography.h6.fontSize,
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    subscriptionsIcon: {
      marginRight: theme.spacing(1),
      fontSize: theme.typography.h4.fontSize,
      color: PRIMARY_COLOR,
    },
  },
}));
