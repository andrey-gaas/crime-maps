import React from 'react';
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
import emailValidator from 'email-validator';
import useStyles from './styles';
import logo from '../../images/logo_dark.svg';
import { changeField } from '../../store/AC/forms';
import { signInRequest } from '../../store/AC/auth';
import { PASSWORD_TEMPLATE } from '../../constants/forms';

function SignIn(props) {
  const {
    snackbar,
    email,
    emailError,
    password,
    passwordError,
    isDisabled,
    changeField,
    signInRequest,
  } = props;
  const classes = useStyles();

  const handleChange = ({ target }) => batch(() => {
    changeField(target.name, target.value);
    changeField(target.name + 'Error', '');
  });

  const handleClick = () => {
    let emailError = '';
    let passwordError = '';

    if (!emailValidator.validate(email)) emailError = 'Введите корректный E-Mail.';
    if (!password || password.length < 6 || password.length > 16) passwordError = 'Введите корректный пароль.';
    if (!password.match(PASSWORD_TEMPLATE)) passwordError = 'Введите корректный пароль.';

    if (emailError || passwordError) {
      batch(() => {
        changeField('signInEmailError', emailError);
        changeField('signInPasswordError', passwordError);
      });
      return;
    }

    signInRequest();
  };

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
            name="signInEmail"
            value={email}
            error={!!emailError}
            helperText={emailError}
            onChange={handleChange}
            className={classes.textField}
            label="E-Mail"
          />

          <TextField
            name="signInPassword"
            value={password}
            error={!!passwordError}
            helperText={passwordError}
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
            onClick={handleClick}
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
              disabled={isDisabled}
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
  snackbar:      PropTypes.string,
  email:         PropTypes.string,
  emailError:    PropTypes.string,
  password:      PropTypes.string,
  passwordError: PropTypes.string,
  isDisabled:    PropTypes.bool,
  changeField:   PropTypes.func.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  snackbar:      '',
  email:         '',
  emailError:    '',
  password:      '',
  passwordError: '',
  isDisabled:    false,
};

const mapStateToProps = ({ system, forms }) => ({
  snackbar:      system.signInSnackbar,
  email:         forms.signInEmail,
  emailError:    forms.signInEmailError,
  password:      forms.signInPassword,
  passwordError: forms.signInPasswordError,
  isDisabled:    forms.signInButtonDisabled,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
  signInRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
