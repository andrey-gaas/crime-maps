import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Divider,
  Hidden,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import logo from '../../images/logo_dark.svg';

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
          <Toolbar>
            <img
              alt="Logo"
              src={logo}
              className={classes.logo}
            />
            <div className={classes.logoTextContainer}>
              <Typography className={classes.logoText}>
                CRIME
              </Typography>
              <Typography className={classes.logoText}>
                MAPS
              </Typography>
            </div>
          </Toolbar>
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
          <Toolbar>
            <img
              alt="Logo"
              src={logo}
              className={classes.logo}
            />
            <div className={classes.logoTextContainer}>
              <Typography className={classes.logoText}>
                CRIME
              </Typography>
              <Typography className={classes.logoText}>
                MAPS
              </Typography>
            </div>
          </Toolbar>
          <Divider />
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
