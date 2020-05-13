import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import useStyles from './styles';
import logo from '../../images/logo_dark.svg';

function SignUp() {
  const classes = useStyles();
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
          Регистрация
        </Typography>
        
        <div className={classes.form}>
          <TextField
            name="name"
            value={fields.name}
            onChange={handleChange}
            className={classes.textField}
            label="Имя на сайте"
          />

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
    </div>
  );
}

export default SignUp;
