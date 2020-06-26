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
} from '../../store/AC/map';

import Main from '../Main';

function App(props) {
  const {
    setLocation,
    setLocationError,
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
  } = props;

  const contextValue = {
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
  };

  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  return (
    <Context.Provider value={contextValue}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Main} />
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
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setLocation,
  setLocationError,
  changeCoordinates,
  changeZoom,
  incrementZoom,
  decrementZoom,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
