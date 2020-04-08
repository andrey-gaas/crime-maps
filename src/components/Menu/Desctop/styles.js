import { makeStyles } from '@material-ui/core/styles';
import cityBackground from '../../../images/novosibirsk.jpg'

const drawerWidth = 360;

export default makeStyles(theme => ({
  root: {
    width: drawerWidth,
    flexShrink: 0
  },
  rootPaper: {
    width: drawerWidth
  },
  header: {
    position: 'relative',
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
