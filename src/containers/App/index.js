import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import cookie from 'js-cookie';
import Main from '../Main';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { setLocation, setLocationError } from '../../store/AC/geodata';
import { checkUserAuth } from '../../store/AC/auth';

function App(props) {
  const {
    setLocation,
    setLocationError,
    checkUserAuth,
  } = props;
  
  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  if(cookie.get('token')) checkUserAuth();
  
  return (
    <Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Fragment>
  );
}

App.propTypes = {
  setLocation:      PropTypes.func.isRequired,
  setLocationError: PropTypes.func.isRequired,
  checkUserAuth:    PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setLocation,
  setLocationError,
  checkUserAuth,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
