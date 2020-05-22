import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';
import useStyles from './styles';
import { logout } from '../../../store/AC/user';

function Auth(props) {
  const {
    isAuth,
    name,
    // id,
    avatar,
    logout,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        !isAuth &&
          <Link to="/sign-in" className={classes.link}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              className={classes.button}
              startIcon={<AccountCircleIcon />}
            >
              Авторизация
            </Button>
          </Link>
      }
      {
        isAuth &&
          <div className={classes.userContainer}>
            <Avatar
              alt={name}
              src={avatar ? avatar : null}
              className={classes.avatar}
            >
              {name[0]}
            </Avatar>
            <Typography variant="subtitle1">{name}</Typography>
            <div className={classes.userButtons}>
              <Tooltip title="Настройки">
                <Link to="/settings">
                  <IconButton size="small">
                    <SettingsIcon />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Выход">
                <IconButton size="small" onClick={logout}>
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
      }
    </div>
  );
}

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  name:   PropTypes.string,
  id:     PropTypes.number,
  avatar: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

Auth.defaultProps = {
  name: null,
  id: null,
  avatar: null,
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
  name:   user.name,
  id:     user.id,
  avatar: user.avatar,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
