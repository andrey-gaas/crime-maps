import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  Avatar,
} from '@material-ui/core';
import Header from '../../../components/Header';
import useStyles from './styles';
import avatar from '../../../images/default_avatar.png';

function Profile(props) {
  const classes = useStyles();
  const {
    name,
    email,
  } = props;

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Личный кабинет</Typography>
      </Header>
      <Paper className={classes.paper}>
        <Avatar alt="Avatar" src={avatar} className={classes.avatar} />
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.email}>{email}</Typography>
      </Paper>
    </Fragment>
  );
}

Profile.propTypes = {
  name:  PropTypes.string,
  email: PropTypes.string,
};

Profile.defaultProps = {
  name:  '',
  email: '',
};

const mapStateToProps = ({ user }) => ({
  name:  user.name,
  email: user.email,
});

export default connect(mapStateToProps)(Profile);