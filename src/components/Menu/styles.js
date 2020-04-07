import { makeStyles } from '@material-ui/core/styles';
import cityBackground from '../../images/novosibirsk.jpg'

const drawerWidth = '20%';

export const styles = makeStyles(theme => ({
  desctopDrawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  desctopDrawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  desctopDrawerClose: {
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
  }
}));

export const geoStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(3),
    overflowX: 'hidden'
  },
  cityName: {
    color: '#fff'
  },
  emblem: {
    marginRight: theme.spacing(1)
  }
}));
