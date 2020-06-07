import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Hidden,
} from '@material-ui/core';
import useStyles from './styles';

function Menu(props) {
  const {
    isOpenMobile,
    onClose,
    children,
  } = props;
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={isOpenMobile}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
          >
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
}

Menu.propTypes = {
  isOpenMobile: PropTypes.bool.isRequired,
  onClose:      PropTypes.func.isRequired,
  children:     PropTypes.node.isRequired,
};

export default Menu;
