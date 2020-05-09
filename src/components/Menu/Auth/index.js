import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from '@material-ui/core';
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import useStyles from './styles';

function Auth(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/sign-in" className={classes.link}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          className={classes.button}
          startIcon={<AccountCircleIcon />}
        >
          Авторизация
        </Button>
      </Link>
    </div>
  );
}

export default Auth;
