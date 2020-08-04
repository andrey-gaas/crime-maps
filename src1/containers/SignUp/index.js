import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  Paper,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import Context from '../../Context';
import useStyles from './styles';
import logo from '../../images/logo_dark.svg';

function SignUp(props) {
  const {
    isButtonDisabled,
    name,
    nameError,
    email,
    emailError,
    password,
    passwordError,
    isAuth,
  } = props;
  const { changeField, signUpValidate } = useContext(Context);

  const classes = useStyles();

  const handleChange = ({ target }) => batch(() => {
    changeField(target.name, target.value);
    changeField(target.name + 'Error', '');
  });

  return (
    isAuth ? <Redirect to="/map" /> :
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
            name="signUpName"
            value={name}
            onChange={handleChange}
            error={!!nameError}
            helperText={nameError}
            className={classes.textField}
            label="Имя на сайте"
          />

          <TextField
            name="signUpEmail"
            value={email}
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
            className={classes.textField}
            label="E-Mail"
          />

          <TextField
            name="signUpPassword"
            value={password}
            type="password"
            onChange={handleChange}
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
            onClick={signUpValidate}
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
        <Link to="/map" className={classes.link}>
          <Button className={classes.backButton}>
            Назад на сайт
          </Button>
        </Link>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  name:             PropTypes.string,
  nameError:        PropTypes.string,
  email:            PropTypes.string,
  emailError:       PropTypes.string,
  password:         PropTypes.string,
  passwordError:    PropTypes.string,
  isButtonDisabled: PropTypes.bool,
  isAuth:           PropTypes.bool.isRequired,
};

SignUp.defaultProps = {
  name:             '',
  nameError:        '',
  email:            '',
  emailError:       '',
  password:         '',
  passwordError:    '',
  isButtonDisabled: false,
};

const mapStateToProps = ({ forms, user }) => ({
  name:             forms.signUpName,
  nameError:        forms.signUpNameError,
  email:            forms.signUpEmail,
  emailError:       forms.signUpEmailError,
  password:         forms.signUpPassword,
  passwordError:    forms.signUpPasswordError,
  isButtonDisabled: forms.signUpButtonDisabled,
  isAuth:           user.isAuth,
});

export default connect(mapStateToProps)(SignUp);
