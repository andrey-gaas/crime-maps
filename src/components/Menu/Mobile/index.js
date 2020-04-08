import React, { useState } from 'react';
import {
  Hidden,
  SwipeableDrawer,
  Fab,
  Typography,
  IconButton
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ArrowBackIos as ArrowIcon
} from '@material-ui/icons';
import useStyles from './styles';
import LogoDark from '../../../images/logo_dark.svg';
import Geo from '../Geo';

function MobileMenu() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = value => setOpen(value);

  return (
    <Hidden mdUp implementation="css">
      <Fab className={classes.openButton} onClick={() => toggleMenu(true)}>
        <MenuIcon />
      </Fab>

      <SwipeableDrawer
        open={isOpen}
        onOpen={() => toggleMenu(true)}
        onClose={() => toggleMenu(false)}
        className={classes.root}
        classes={{ paper: classes.root }}
      >
        <div className={classes.header}>
          <img src={LogoDark} alt="" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Crime Maps
          </Typography>
          <div className={classes.grow} />
          <IconButton className={classes.closeMenuButton} onClick={() => toggleMenu(false)}>
            <ArrowIcon />
          </IconButton>
        </div>
        <Geo />
      </SwipeableDrawer>
    </Hidden>
  );
}

export default MobileMenu;
