import React from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
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
import { requestSignUp } from '../../store/AC/auth';
import { changeField } from '../../store/AC/forms';
import { NAME_TEMPLATE, PASSWORD_TEMPLATE } from '../../constants/forms';

function SignUp(props) {
  const {
    snackbar,
    isButtonDisabled,
    requestSignUp,
    changeField,
    name,
    nameError,
    email,
    emailError,
    password,
    passwordError,
    redirect,
  } = props;
  const classes = useStyles();

  const changeName = ({ target }) => batch(() => {
    changeField('signUpName', target.value);
    changeField('signUpNameError', '');
  });

  const changeEmail = ({ target }) => batch(() => {
    changeField('signUpEmail', target.value);
    changeField('signUpEmailError', '');
  });

  const changePassword = ({ target }) => batch(() => {
    changeField('signUpPassword', target.value);
    changeField('signUpPasswordError', '');
  });

  const handleClick = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!name || name.length < 6 || name.length > 16) nameError = 'Имя должно содержать от 6 до 16 символов.';
    if (!name.match(NAME_TEMPLATE)) nameError = 'Допустимы только латинские и кириллические символы, а так же числа.';

    if (!emailValidator.validate(email)) emailError = 'Введите корректный E-Mail.';

    if (!password || password.length < 6 || password.length > 16) passwordError = 'Пароль должен содержать от 6 до 16 символов.';
    if (!password.match(PASSWORD_TEMPLATE)) passwordError = 'Допустимы только латинские символы и числа.';

    if (nameError || emailError || passwordError) {
      batch(() => {
        changeField('signUpNameError', nameError);
        changeField('signUpEmailError', emailError);
        changeField('signUpPasswordError', passwordError);
      });
      return;
    }

    requestSignUp({ name, email, password });
  };

  return (
    <div className={classes.root}>
      { redirect && <Redirect to="/sign-in" /> }
      <div className={classes.logoContainer}>
        <Typography variant="h5">Crime Maps</Typography>
        <img src={logo} alt="" className={classes.logo} />
      </div>

      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          Регистрация
        </Typography>
        
        <div className={classes.form}>
          <TextField
            name="name"
            value={name}
            onChange={changeName}
            error={!!nameError}
            helperText={nameError}
            className={classes.textField}
            label="Имя на сайте"
          />

          <TextField
            name="email"
            value={email}
            onChange={changeEmail}
            error={!!emailError}
            helperText={emailError}
            className={classes.textField}
            label="E-Mail"
          />

          <TextField
            name="password"
            value={password}
            type="password"
            onChange={changePassword}
            error={!!passwordError}
            helperText={passwordError}
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
            disabled={isButtonDisabled}
          >
            Зарегистрироваться
          </Button>
          <Typography variant="body2" className={classes.grayText}>Уже есть аккаунт?</Typography>
          <Link to='/sign-in' className={classes.link}>
            <Button
              color="secondary"
              variant="contained"
              className={classes.linkButton}
              fullWidth
            >
              Войти
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

SignUp.propTypes = {
  snackbar:         PropTypes.string,
  requestSignUp:    PropTypes.func.isRequired,
  changeField:      PropTypes.func.isRequired,
  name:             PropTypes.string,
  nameError:        PropTypes.string,
  email:            PropTypes.string,
  emailError:       PropTypes.string,
  password:         PropTypes.string,
  passwordError:    PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  redirect:         PropTypes.bool,
};

SignUp.defaultProps = {
  name:             '',
  nameError:        '',
  email:            '',
  emailError:       '',
  password:         '',
  passwordError:    '',
  isButtonDisabled: false,
  redirect:         false,
};

const mapStateToProps = ({ system, forms }) => ({
  snackbar:         system.signUpSnackbar,
  redirect:         system.signUpRedirectToSignIn,
  name:             forms.signUpName,
  nameError:        forms.signUpNameError,
  email:            forms.signUpEmail,
  emailError:       forms.signUpEmailError,
  password:         forms.signUpPassword,
  passwordError:    forms.signUpPasswordError,
  isButtonDisabled: forms.signUpButtonDisabled,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestSignUp,
  changeField,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
