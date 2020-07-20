import React, { useEffect } from 'react';
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
import { signInValidate, signUpValidate, fetchUserData } from '../../store/AC/user';
import { fetchAllNews, fetchNews, setActiveNews, fetchNewsForCabinet } from '../../store/AC/news';

import Index from '../Index';
import Main from '../Main';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Cabinet from '../Cabinet';

function App(props) {
  const {
    isAuth,
    fetchUserData,
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
    fetchNewsForCabinet,
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
    fetchNewsForCabinet,
  };

  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  useEffect(() => {
    if (isAuth) {
      fetchUserData();
    }
  }, [isAuth, fetchUserData]);

  return (
    <Context.Provider value={contextValue}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/map" component={Main} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/cabinet" component={Cabinet} />
      </Switch>
    </Context.Provider>
  );
}

App.propTypes = {
  isAuth:              PropTypes.bool.isRequired,
  setLocation:         PropTypes.func.isRequired,
  setLocationError:    PropTypes.func.isRequired,
  changeCoordinates:   PropTypes.func.isRequired,
  changeZoom:          PropTypes.func.isRequired,
  incrementZoom:       PropTypes.func.isRequired,
  decrementZoom:       PropTypes.func.isRequired,
  changeNewsTypes:     PropTypes.func.isRequired,
  changeSystemField:   PropTypes.func.isRequired,
  changeField:         PropTypes.func.isRequired,
  signInValidate:      PropTypes.func.isRequired,
  signUpValidate:      PropTypes.func.isRequired,
  fetchAllNews:        PropTypes.func.isRequired,
  fetchNews:           PropTypes.func.isRequired,
  setActiveNews:       PropTypes.func.isRequired,
  fetchNewsForCabinet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({ isAuth: user.isAuth });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserData,
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
  fetchNewsForCabinet,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
