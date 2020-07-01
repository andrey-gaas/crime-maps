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
    header: {
      position: 'relative',
      height: 200,
    },
    searchContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing(3),
      padding: '5px 10px',
      backgroundColor: '#fff',
      borderRadius: theme.shape.borderRadius * 2,
      border: '1px solid #ccc',
    },
    search: {
      width: '86%'
    },
    blackout: {
      paddingTop: 1,
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .5)',
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
