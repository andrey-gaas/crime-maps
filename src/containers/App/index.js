import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { setLocation, setLocationError } from '../../store/AC/map';

import Main from '../Main';

function App(props) {
  const {
    setLocation,
    setLocationError,
  } = props;

  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  return (
    <Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Fragment>
  );
}

App.propTypes = {
  setLocation: PropTypes.func.isRequired,
  setLocationError: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setLocation,
  setLocationError,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
