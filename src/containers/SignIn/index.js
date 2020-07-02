import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import logo from '../../images/logo_dark.svg';
import useStyles from './styles';

function SignIn(props) {
  const { isAuth } = props;
  const classes = useStyles();

  return (
    <Fragment>
      { isAuth && <Redirect to="/map" /> }
      
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
              /* value={email}
              error={!!emailError}
              helperText={emailError}
              onChange={handleChange} */
              className={classes.textField}
              label="E-Mail"
            />

            <TextField
              name="signInPassword"
              /* value={password}
              error={!!passwordError}
              helperText={passwordError} */
              type="password"
              /* onChange={handleChange} */
              className={classes.textField}
              label="Пароль"
            />
  
            <Button 
              color="primary"
              variant="contained"
              size="large"
              className={classes.button}
              fullWidth
              /* onClick={handleClick}
              disabled={isDisabled} */
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
          <Link to="/map" className={classes.link}>
            <Button className={classes.backButton}>
              Назад на сайт
            </Button>
          </Link>
        </div>

        {/* <Snackbar
          open={!!snackbar}
          message={snackbar}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        /> */}
      </div>
    </Fragment>
  );
}

SignIn.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuth:   user.isAuth,
});

export default connect(mapStateToProps)(SignIn);
