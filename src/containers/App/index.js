import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Context from '../../Context';
import {
  setLocation,
  setLocationError,
  changeCoordinates,
  changeZoom,
  incrementZoom,
  decrementZoom,
  changeNewsTypes,
} from '../../store/AC/map';
import { changeSystemField } from '../../store/AC/system';

import Main from '../Main';
import SignIn from '../SignIn';

function App(props) {
  const {
    setLocation,
    setLocationError,
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
    changeNewsTypes,
    changeSystemField,
  } = props;

  const contextValue = {
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
    changeNewsTypes,
    changeSystemField,
  };

  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  return (
    <Context.Provider value={contextValue}>
      <CssBaseline />
      <Switch>
        <Route path="/map" component={Main} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Context.Provider>
  );
}

App.propTypes = {
  setLocation:       PropTypes.func.isRequired,
  setLocationError:  PropTypes.func.isRequired,
  changeCoordinates: PropTypes.func.isRequired,
  changeZoom:        PropTypes.func.isRequired,
  incrementZoom:     PropTypes.func.isRequired,
  decrementZoom:     PropTypes.func.isRequired,
  changeNewsTypes:   PropTypes.func.isRequired,
  changeSystemField: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setLocation,
  setLocationError,
  changeCoordinates,
  changeZoom,
  incrementZoom,
  decrementZoom,
  changeNewsTypes,
  changeSystemField,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
