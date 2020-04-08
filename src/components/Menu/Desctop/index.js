import React from 'react';
import {
  Drawer,
  Hidden,
  InputBase
} from '@material-ui/core';
import makeStyles from './styles';
import LogoDark from '../../../images/logo_dark.svg';
import Geo from '../Geo';

function DesctopMenu() {
  const classes = makeStyles();

  return (
    <Hidden smDown implementation="css">
      <Drawer
          variant="permanent"
          className={classes.root}
          classes={{
            paper: classes.rootPaper
          }}
        >
          <div className={classes.header}>
            <div className={classes.darkBG}>
              <div className={classes.searchContainer}>
                <img src={LogoDark} alt="" height="35px" />
                <InputBase
                  className={classes.search}
                  placeholder="Поиск по Crime Maps..."
                />
              </div>
              <Geo />
            </div>
          </div>
        </Drawer>
    </Hidden>
  );
}

export default DesctopMenu;
