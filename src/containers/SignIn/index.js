import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import useStyles from './styles';
import logo from '../../images/logo_dark.svg';

function SignIn(props) {
  const {
    snackbar, 
  } = props;
  const classes = useStyles();
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => setFields({
    ...fields,
    [target.name]: target.value,
  });

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <Typography variant="h5">Crime Maps</Typography>
        <img src={logo} alt="" className={classes.logo} />
      </div>

      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          Вход
        </Typography>

        <div className={classes.form}>
          <TextField
            name="email"
            value={fields.email}
            onChange={handleChange}
            className={classes.textField}
            label="E-Mail"
          />

          <TextField
            name="password"
            value={fields.password}
            type="password"
            onChange={handleChange}
            className={classes.textField}
            label="Пароль"
          />

          <Button 
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            fullWidth
          >
            Войти
          </Button>
          <Typography variant="body2" className={classes.grayText}>или</Typography>
          <Link to='/sign-up' className={classes.link}>
            <Button
              color="secondary"
              variant="contained"
              className={classes.linkButton}
              fullWidth
            >
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </Paper>
      <div className={classes.underContainer}>
        <Link to="/" className={classes.link}>
          <Button className={classes.backButton}>
            Назад на сайт
          </Button>
        </Link>
      </div>
      <Snackbar
        open={!!snackbar}
        message={snackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      />
    </div>
  );
}

SignIn.propTypes = {
  snackbar: PropTypes.string,
};

SignIn.defaultProps = {
  snackbar: '',
};

const mapStateToProps = ({ system }) => ({
  snackbar: system.signInSnackbar,
});

export default connect(mapStateToProps)(SignIn);
