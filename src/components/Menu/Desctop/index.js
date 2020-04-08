import React, { useState } from 'react';
import cn from 'classnames';
import { Drawer, Hidden, InputBase } from '@material-ui/core';
import { desctopMenu as makeStyles } from '../styles';
import LogoDark from '../../../images/logo_dark.svg';
import Geo from '../Geo';

function DesctopMenu() {
  const classes = makeStyles();
  const [isOpen, /* setOpen */] = useState(true);

  return (
    <Hidden smDown implementation="css">
      <Drawer
          variant="permanent"
          className={
            cn(classes.root, {
              [classes.open]: isOpen,
              [classes.close]: !isOpen,
            })
          }
          classes={{
            paper: cn({
              [classes.open]: isOpen,
              [classes.close]: !isOpen,
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
    </Hidden>
  );
}

export default DesctopMenu;
