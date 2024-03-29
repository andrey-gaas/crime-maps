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
  ExitToApp as ExitToAppIcon,
  Loop as LoopIcon,
} from '@material-ui/icons';
import useStyles from './styles';
import { logout } from '../../../store/AC/user';

function Auth(props) {
  const {
    isAuth,
    name,
    id,
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
        isAuth && id === null ?
          <div className={classes.userContainer}>
            <div className={classes.userContainerCheck}>
              Проверка данных
              <LoopIcon className={classes.rotate} />
            </div>
          </div> : null
      }
      {
        isAuth && id !== null ?
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
              <Tooltip title="Личный кабинет">
                <Link to="/cabinet">
                  <IconButton size="small">
                    <AccountCircleIcon />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Выход">
                <IconButton size="small" onClick={logout}>
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div> : null
      }
    </div>
  );
}

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  name:   PropTypes.string,
  avatar: PropTypes.string,
  id:     PropTypes.number,
  logout: PropTypes.func.isRequired,
};

Auth.defaultProps = {
  name:   null,
  id:     null,
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
