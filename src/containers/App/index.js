import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Context from '../../Context';
import * as mapAC from '../../store/AC/map';
import * as systemAC from '../../store/AC/system';
import * as formsAC from '../../store/AC/forms';
import * as userAC from '../../store/AC/user';
import * as newsAC from '../../store/AC/news';
import * as citiesAC from '../../store/AC/cities';

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
    ...contextValue
  } = props;

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
  fetchCities:         PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({ isAuth: user.isAuth });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUserData:       userAC.fetchUserData,
  signInValidate:      userAC.signInValidate,
  signUpValidate:      userAC.signUpValidate,
  setLocation:         mapAC.setLocation,
  setLocationError:    mapAC.setLocationError,
  changeCoordinates:   mapAC.changeCoordinates,
  changeZoom:          mapAC.changeZoom,
  incrementZoom:       mapAC.incrementZoom,
  decrementZoom:       mapAC.decrementZoom,
  changeNewsTypes:     mapAC.changeNewsTypes,
  changeSystemField:   systemAC.changeSystemField,
  changeField:         formsAC.changeField,
  fetchAllNews:        newsAC.fetchAllNews,
  fetchNews:           newsAC.fetchNews,
  setActiveNews:       newsAC.setActiveNews,
  fetchNewsForCabinet: newsAC.fetchNewsForCabinet,
  fetchCities:         citiesAC.fetchCities,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
