import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer, Divider, Button } from '@material-ui/core';
import {
  Reorder as ReorderIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import makeStyles from './styles';
import Header from '../HeaderMenu';
import NewsTypes from '../NewsTypes';
import Navigation from '../Navigation';

function DesctopMenu(props) {
  const { location, isAuth } = props;
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

      {
        isAuth &&
        <div className={classes.subscriptionsContainer}>
          <Divider />
          <Link to="/map/subscriptions" className={classes.subscriptionsLink}>
            <ReorderIcon className={classes.subscriptionsIcon} /> Подписки
          </Link>
          <Divider />
        </div>
      }

      { isAuth && <Navigation location={location.pathname} /> }

      {
        !isAuth &&
        <Link to="/sign-in" className={classes.authLink}>
          <Button className={classes.authButton} fullWidth>
            <AccountCircleIcon />
            Авторизация
          </Button>
        </Link>
      }
    </Drawer>
  )
}

DesctopMenu.propTypes = {
  location: PropTypes.object.isRequired,
  isAuth:   PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
});

export default connect(mapStateToProps)(DesctopMenu);
