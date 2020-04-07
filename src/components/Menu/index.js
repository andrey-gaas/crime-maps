import React, { useState } from 'react';
import cn from 'classnames';
import {
  Drawer,
  InputBase
} from '@material-ui/core';
import { styles as useStyles} from './styles';
import LogoDark from '../../images/logo_dark.svg';
import Geo from './Geo';

function Menu() {
  const [ openDrawer, /* setOpenDrawer */ ] = useState(true);
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={
        cn(classes.desctopDrawer, {
          [classes.desctopDrawerOpen]: openDrawer,
          [classes.desctopDrawerClose]: !openDrawer,
        })
      }
      classes={{
        paper: cn({
          [classes.desctopDrawerOpen]: openDrawer,
          [classes.desctopDrawerClose]: !openDrawer,
        }),
      }}
    >
      <div className={classes.header}>
        <div className={classes.searchContainer}>
          <img src={LogoDark} alt="Crime Maps" height="35px" />
          <InputBase
            className={classes.search}
            placeholder="Поиск по Crime Maps..."
          />
        </div>
        <Geo />
      </div>
    </Drawer>
  );
}

export default Menu;
