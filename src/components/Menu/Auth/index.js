import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';
import useStyles from './styles';

function Auth(props) {
  const {
    isAuth,
    name,
    id,
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
            <Typography variant="subtitle1">{name}</Typography>
            <div className={classes.userButtons}>
              <Tooltip title="Настройки">
                <IconButton size="small">
                  <SettingsIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Выход">
                <IconButton size="small">
                  <ExitToAppIcon className={classes.icon} />
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

export default connect(mapStateToProps)(Auth);
