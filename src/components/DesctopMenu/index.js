import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Divider } from '@material-ui/core';
import { Reorder as ReorderIcon } from '@material-ui/icons';
import makeStyles from './styles';
import Header from '../HeaderMenu';
import NewsTypes from '../NewsTypes';

function DesctopMenu() {
  const classes = makeStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.root}
      classes={{
        paper: classes.rootPaper
      }}
    >
      <Header />

      <NewsTypes />

      <div className={classes.subscriptionsContainer}>
        <Divider />
        <Link to="/subscriptions" className={classes.subscriptionsLink}>
          <ReorderIcon className={classes.subscriptionsIcon} /> Подписки
        </Link>
        <Divider />
      </div>
    </Drawer>
  )
}

export default DesctopMenu;
