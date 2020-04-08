import { makeStyles } from '@material-ui/core/styles';

const width = "80%";
const index = 1000;

export default makeStyles(theme => ({
  openButton: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    zIndex: index,
  },
  root: {
    width,
    zIndex: index + 1
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(0),
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
  },
  title: {
    marginLeft: theme.spacing(1),
    color: '#fff'
  },
  logo: {
    height: 30
  },
  grow: {
    flexGrow: 1,
  },
  closeMenuButton: {
    color: '#fff'
  }
}));
