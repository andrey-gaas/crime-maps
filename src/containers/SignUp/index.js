import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import { requestSignUp } from '../../store/AC/auth';
import { NAME_TEMPLATE, PASSWORD_TEMPLATE } from '../../constants/forms';

function SignUp(props) {
  const {
    snackbar,
    isDisabled,
    requestSignUp,
  } = props;
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: '',
  });

  const handleChange = ({ target }) => setFields({
    ...fields,
    [target.name]: target.value,
    [target.name + 'Error']: '',
  });

  const handleClick = () => {
    const {
      name,
      email,
      password,
    } = fields;
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!name || name.length < 6 || name.length > 16) nameError = 'Имя должно содержать от 6 до 16 символов.';
    if (!name.match(NAME_TEMPLATE)) nameError = 'Допустимы только латинские и кириллические символы, а так же числа.';

    if (!emailValidator.validate(email)) emailError = 'Введите корректный E-Mail.';

    if (!password || password.length < 6 || password.length > 16) passwordError = 'Пароль должен содержать от 6 до 16 символов.';
    if (!password.match(PASSWORD_TEMPLATE)) passwordError = 'Допустимы только латинские символы и числа.';

    if (nameError || emailError || passwordError) {
      setFields({
        ...fields,
        nameError,
        emailError,
        passwordError,
      });
      return;
    }

    requestSignUp(fields);
  };

  return (
    <div className={classes.root}>
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
            value={fields.name}
            onChange={handleChange}
            error={!!fields.nameError}
            helperText={fields.nameError}
            className={classes.textField}
            label="Имя на сайте"
          />

          <TextField
            name="email"
            value={fields.email}
            onChange={handleChange}
            error={!!fields.emailError}
            helperText={fields.emailError}
            className={classes.textField}
            label="E-Mail"
          />

          <TextField
            name="password"
            value={fields.password}
            type="password"
            onChange={handleChange}
            error={!!fields.passwordError}
            helperText={fields.passwordError}
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
            disabled={isDisabled}
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
  snackbar: PropTypes.string,
  isDisabled: PropTypes.bool,
  requestSignUp: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  isDisabled: false,
};

const mapStateToProps = ({ system }) => ({
  snackbar: system.signUpSnackbar,
  isDisabled: system.signUpDisabledButton,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestSignUp,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
