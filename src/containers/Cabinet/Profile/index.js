import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  Divider,
} from '@material-ui/core';
import useStyles from './styles';
import { ROLE_USER, ROLE_ADMIN } from '../../../constants/user';

function Profile(props) {
  const classes = useStyles();
  const {
    name,
    email,
    role,
  } = props;

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.profileTitle}>Профиль</Typography>
      <div className={classes.row}>
        <Typography variant="subtitle1" className={classes.label}>Пользователь:</Typography>
        <Typography variant="subtitle1">{name}</Typography>
      </div>
      <Divider />
      <div className={classes.row}>
        <Typography variant="subtitle1" className={classes.label}>E-Mail:</Typography>
        <Typography variant="subtitle1">{email}</Typography>
      </div>
      <Divider />
      {
        role !== ROLE_USER &&
        <div className={classes.row}>
          <Typography variant="subtitle1" className={classes.label}>Должность:</Typography>
          <Typography variant="subtitle1">
            { role === ROLE_ADMIN ? 'Администратор' : 'Модератор' }
          </Typography>
        </div>
      }
    </Paper>
  );
}

Profile.propTypes = {
  name:  PropTypes.string,
  role:  PropTypes.number,
  email: PropTypes.string,
};

Profile.defaultProps = {
  name:  '',
  role:  ROLE_USER,
  email: '',
};

const mapStateToProps = ({ user }) => ({
  name:  user.name,
  role:  user.role,
  email: user.email,
});

export default connect(mapStateToProps)(Profile);