import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Drawer, Divider } from '@material-ui/core';
import { Reorder as ReorderIcon } from '@material-ui/icons';
import makeStyles from './styles';
import Header from '../HeaderMenu';
import NewsTypes from '../NewsTypes';
import Navigation from '../Navigation';

function DesctopMenu(props) {
  const { location } = props;
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
      <Navigation location={location.pathname} />
    </Drawer>
  )
}

DesctopMenu.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DesctopMenu;
