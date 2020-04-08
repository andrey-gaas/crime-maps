import { makeStyles } from '@material-ui/core/styles';
import cityBackground from '../../images/novosibirsk.jpg'

const drawerWidth = 360;

export const desctopMenu = makeStyles(theme => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  open: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  close: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  header: {
    height: 200,
    backgroundImage: `url(${cityBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
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

  buttonMenu: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(1),
    zIndex: 99999,
  }
}));
