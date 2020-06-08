import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  linkMenu: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  [theme.breakpoints.up('md')]: {
    mobileMenuButton: {
      display: 'none',
    },
  },
}));
