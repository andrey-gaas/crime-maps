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
import { changeField } from '../../store/AC/forms';
import { signInValidate, signUpValidate } from '../../store/AC/user';
import { fetchAllNews, fetchNews, setActiveNews } from '../../store/AC/news';

import Index from '../Index';
import Main from '../Main';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

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
    changeField,
    signInValidate,
    signUpValidate,
    fetchAllNews,
    fetchNews,
    setActiveNews,
  } = props;

  const contextValue = {
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
    changeNewsTypes,
    changeSystemField,
    changeField,
    signInValidate,
    signUpValidate,
    fetchAllNews,
    fetchNews,
    setActiveNews,
  };

  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  return (
    <Context.Provider value={contextValue}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Main} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
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
  changeField:       PropTypes.func.isRequired,
  signInValidate:    PropTypes.func.isRequired,
  signUpValidate:    PropTypes.func.isRequired,
  fetchAllNews:      PropTypes.func.isRequired,
  fetchNews:         PropTypes.func.isRequired,
  setActiveNews:     PropTypes.func.isRequired,
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
  changeField,
  signInValidate,
  signUpValidate,
  fetchAllNews,
  fetchNews,
  setActiveNews,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
