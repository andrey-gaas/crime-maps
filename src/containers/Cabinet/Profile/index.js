import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  Avatar,
} from '@material-ui/core';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import useStyles from './styles';
import avatar from '../../../images/default_avatar.png';

function Profile(props) {
  const classes = useStyles();
  const {
    name,
    email,
    isAuth,
  } = props;

  const isLoaded = name && email;

  return (
    !isAuth ? <Redirect to="/map" /> :
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Личный кабинет</Typography>
      </Header>
      <Paper className={classes.paper}>
        <Avatar alt="Avatar" src={avatar} className={classes.avatar} />
        {
          isLoaded ?
            <Fragment>
              <Typography className={classes.name}>{name}</Typography>
              <Typography className={classes.email}>{email}</Typography>
            </Fragment> :
            <Typography className={classes.loading}>
              Загрузка данных
              <Loader />
            </Typography>
        }
      </Paper>
    </Fragment>
  );
}

Profile.propTypes = {
  name:   PropTypes.string,
  email:  PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
};

Profile.defaultProps = {
  name:  '',
  email: '',
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
  name:   user.name,
  email:  user.email,
});

export default connect(mapStateToProps)(Profile);