import { makeStyles } from '@material-ui/core/styles';
import backgrounds from '../../other/cityBackgrounds';
import { WIDTH_MENU as drawerWidth } from '../../constants/styles';

export default makeStyles(theme => ({
  ...backgrounds,
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
}));
