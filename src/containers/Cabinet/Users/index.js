import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  Avatar,
  Button,
  IconButton,
} from '@material-ui/core';
import Header from '../../../components/Header';
import { ROLE_USER } from '../../../constants/user';
import useStyles from './styles';

function Users(props) {
  const { isAuth, role } = props;
  const classes = useStyles();

  if (!isAuth || role === ROLE_USER) {
    return <Redirect to="/map" />;
  }

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Пользователи</Typography>
        <div className={classes.grow} />
      </Header>
    </Fragment>
  );
}

Users.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  role:   PropTypes.number,
};

Users.defaultProps = {
  role: ROLE_USER,
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
  role:   user.role,
});

export default connect(mapStateToProps)(Users);
